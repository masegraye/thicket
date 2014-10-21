"use strict";

var assert           = require("assert"),
    thicket          = require("../../../../lib-node/thicket"),
    DoublyLinkedList = thicket.c("doubly-linked-list");

describe("DoublyLinkedList", function() {
  it("should be defined", function() {
    assert.ok(DoublyLinkedList);
  });

  it("should be able to add, remove, query items", function() {
    var list = new DoublyLinkedList();
    list.add(1);
    list.add(2);
    list.add(3);
    assert.equal(list.size(), 3);

    assert.equal(list.removeFront(), 1);
    assert.equal(list.size(), 2)

    assert.equal(list.removeBack(), 3);
    assert.equal(list.size(), 1);

    assert.ok(list.exists(2));
    assert.equal(list.remove(2), 2);
    assert.equal(list.size(), 0);
  });

  it("should be able to addFront and addBack, get", function() {
    var list = new DoublyLinkedList();
    list.addFront("E");
    list.addBack("E");
    list.addFront("B");
    list.addBack("F");

    assert.equal(list.get(0), "B");
    assert.equal(list.get(1), "E");
    assert.equal(list.get(2), "E");
    assert.equal(list.get(3), "F");

    assert.equal(list.size(), 4);
    list.clear();
    assert.equal(list.size(), 0);
  });

  it("should be able to insertAtIndex, removeAtIndex", function() {
    var list = new DoublyLinkedList();
    list.insertAtIndex(0, "E");
    list.insertAtIndex(1, "E");
    list.insertAtIndex(2, "F");
    list.insertAtIndex(0, "B");

    assert.equal(list.get(0), "B");
    assert.equal(list.get(1), "E");
    assert.equal(list.get(2), "E");
    assert.equal(list.get(3), "F");

    assert.equal(list.size(), 4);

    assert.equal(list.removeAtIndex(3), "F");
    assert.equal(list.removeAtIndex(1), "E");
    assert.equal(list.removeAtIndex(0), "B");
    assert.equal(list.size(), 1);
    assert.equal(list.get(0), "E");

  });
});
