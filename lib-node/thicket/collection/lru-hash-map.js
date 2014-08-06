"use strict";

var mod = function(
  _,
  Options,
  DoublyLinkedList
) {

  var LRUHashMap = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(LRUHashMap.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      this._capacity = opts.getOrError("capacity");
      this._keyAccessList = new DoublyLinkedList();
      // TODO: Really need a proper HashMap at some point...
      this._store = {};
      this._size = 0;
    },
    get: function(key) {
      var entry = this._store[key];
      if (!entry) {
        return;
      }

      // As a perf optimization, we keep a ref
      // to the node in the entry.
      var node = entry.node();
      this._keyAccessList._unlink(node);

      // Get the new node
      node = this._keyAccessList._linkFront(entry.key());

      // Save it
      entry.setNode(node);
      // Return the value
      return entry.value();
    },

    put: function(key, val) {
      var entry = this._store[key],
          node;
      if (!entry) {
        // If no entry, make a new entry
        if (this._keyAccessList.size() >= this._capacity) {
          // Have to make room for it
          var evictedKey = this._keyAccessList.removeBack(),
              evictedEntry = this._store[evictedKey];

          evictedEntry.dispose();
          delete this._store[evictedKey];
          this._size--;
        }

        node = this._keyAccessList._linkFront(key);
        entry = new Entry({
          key: key,
          value: val,
          node: node
        });
        this._store[key] = entry;
        this._size++;
      } else {
        // "Touch" the entry, set new value
        node = entry.node();
        this._keyAccessList._unlink(node);
        node = this._keyAccessList._linkFront(entry.key());
        // Update with the new node and value
        entry.setNode(node);
        entry.setValue(val);
      }
    },

    remove: function(key) {
      var entry = this._store[key],
          value,
          node;
      if (entry) {
        value = entry.value();
        node = entry.node();
        this._keyAccessList._unlink(node);
        entry.dispose();
        this._size--;
        delete this._store[key];
        return value;
      }
    },

    exists: function(key) {
      return this._store.hasOwnProperty(key) && this._store[key];
    },

    size: function() {
      return this._size;
    },

    clear: function() {
      _.invoke(this._store, "dispose");
      this._store = {};
      this._keyAccessList.clear();
      this._size = 0;
    }
  });

  var Entry = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(Entry.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      // Though the Node should have the key, if the node
      // is unlinked from the list, its boxed value will disappear
      this._key   = opts.getOrError("key");
      this._value = opts.getOrError("value");
      this._node  = opts.getOrError("node");
    },
    node: function() {
      return this._node;
    },
    setNode: function(node) {
      this._node = node;
    },
    value: function() {
      return this._value;
    },
    setValue: function(value) {
      this._value = value;
    },
    key: function() {
      return this._key;
    },
    dispose: function() {
      this._key = null;
      this._value = null;
      this._node = null;
    }
  });

  return LRUHashMap;
};

module.exports = mod(
  require("underscore"),
  require("../core/options"),
  require("./doubly-linked-list")
);
