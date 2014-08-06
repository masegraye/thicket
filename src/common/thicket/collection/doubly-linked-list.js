"use strict";

var mod = function(
  _,
  Options
) {

  var DoublyLinkedList = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(DoublyLinkedList.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);

      this._front = null;
      this._back = null;
      this._size = 0;
    },

    get: function(idx) {
      this._checkElementIdxOrThrow(idx);
      var node = this._walkToIdx(idx);
      return node.value();
    },

    exists: function(value) {
      var node = this._walkToValue(value);
      return !!node;
    },

    size: function() {
      return this._size;
    },

    add: function(value) {
      return this.addBack.apply(this, arguments);
    },

    addFront: function(value) {
      this._linkFront(value);
    },

    addBack: function(value) {
      this._linkBack(value);
    },

    remove: function(value) {
      var node = this._walkToValue(value);
      return this._unlink(node);
    },

    removeFront: function() {
      if (this._front === null) {
        throw new Error("No such element");
      }
      return this._unlinkFront(this._front);
    },

    removeBack: function() {
      if (this._back === null) {
        throw new Error("No such element");
      }
      return this._unlinkBack(this._back);
    },

    insertAtIndex: function(idx, value) {
      this._checkIsElementPositionOrThrow(idx);

      if (idx === this._size) {
        this.addBack(value);
      } else {
        var node = this._walkToIdx(idx);
        this._linkBefore(value, node);
      }
    },

    removeAtIndex: function(idx) {
      this._checkElementIdxOrThrow(idx);
      if (idx === 0) {
        return this._unlinkFront(this._front);
      } else if ( idx === (this._size - 1) ) {
        return this._unlinkBack(this._back);
      } else {
        var node = this._walkToIdx(idx);
        return this._unlink(node);
      }
    },

    clear: function() {
      var node = this._front,
          next;

      while (node !== null) {
        next = node.next();
        node.dispose();
        node = next;
      }
      this._front = null;
      this._back  = null;
      this._size = 0;
    },

    _linkFront: function(value) {
      var oldFront = this._front,
          newNode = new Node({value: value});
      this._front = newNode;

      if (oldFront === null) {
        this._back = newNode;
      } else {
        oldFront.setPrev(newNode);
        newNode.setNext(oldFront);
      }

      this._size++;
    },

    _linkBack: function(value) {
      var oldBack = this._back,
          newNode = new Node({value: value});

      this._back = newNode;
      if (oldBack === null) {
        this._front = newNode;
      } else {
        oldBack.setNext(newNode);
        newNode.setPrev(oldBack);
      }

      this._size++;
    },

    _linkBefore: function(value, node) {
      var pred    = node.prev(),
          newNode = new Node({value: value, prev: pred, next: node});

      node.setPrev(newNode);
      if (pred === null) {
        this._front = newNode;
      } else {
        pred.setNext(newNode);
      }
      this._size++
    },

    _unlinkFront: function(node) {
      var value    = node.value(),
          newFront = node.next();

      node.dispose();
      this._front = newFront;
      if (newFront === null) {
        this._back = null;
      } else {
        newFront.setPrev(null);
      }
      this._size--;
      return value;
    },

    _unlinkBack: function(node) {
      var value   = node.value(),
          newBack = node.prev();

      node.dispose();
      this._back = newBack;
      if (newBack == null) {
        this._front = null;
      } else {
        newBack.setNext(null);
      }
      this._size--;
      return value;
    },

    _unlink: function(node) {
      var prev  = node.prev(),
          next  = node.next(),
          value = node.value();

      if (prev === null) {
        this._front = next;
      } else {
        prev.setNext(next);
      }

      if (next === null) {
        this._back = prev;
      } else {
        next.setPrev(prev);
      }

      node.dispose();
      this._size--;
      return value;
    },

    _walkToIdx: function(idx) {
      var node, value, current;
      if (idx < this._size / 2) {
        node = this._front;
        current = 0;
        while(current !== idx) {
          node = node.next();
          current++;
        }
      } else {
        node = this._back;
        current = this._size - 1;

        while(current !== idx) {
          node = node.prev();
          current--;
        }
      }
      return node;
    },

    _walkToValue: function(value) {
      var n = this._front;
      while (n !==null ) {
        if (n.match(value)) {
          return n;
        }
        n = n.next();
      }
      return null;
    },

    _isElementIdx: function(idx) {
      return (idx >= 0 && idx < this._size);
    },

    _isElementPosition: function(idx) {
      return (idx >= 0 && idx <= this._size);
    },

    _checkElementIdxOrThrow: function(idx) {
      if (!this._isElementIdx(idx)) {
        throw new Error("Index out of bounds; size: " + this._size + "; idx: " + idx);
      }
    },

    _checkIsElementPositionOrThrow: function(idx) {
      if (!this._isElementPosition(idx)) {
        throw new Error("Index out of bounds; size: " + this._size + "; idx: " + idx);
      }
    }

  });

  var Node = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(Node.prototype, {
    initialize: function(opts) {
      opts        = Options.fromObject(opts);
      this._next  = opts.getOrElse("next", null);
      this._prev  = opts.getOrElse("prev", null);
      this._value = opts.getOrElse("value", null);
    },

    next: function() {
      return this._next;
    },

    prev: function() {
      return this._prev;
    },

    setNext: function(node) {
      this._next = node;
    },

    setPrev: function(node) {
      this._prev = node;
    },

    value: function() {
      return this._value;
    },

    dispose: function() {
      this._next  = null;
      this._prev  = null;
      this._value = null;
    },

    match: function(value) {
      return this._value === value;
    }
  });

  return DoublyLinkedList;
};

module.exports = mod(
  require("underscore"),
  require("../core/options")
);
