"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
    value;
    next;
}
class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }
    get(index) {
        if (index >= this.length || index < 0) {
            return undefined;
        }
        let currentNode = this.head;
        // Since currentNode already set,
        // and i starts at 0
        // only increment if index is above this value
        for (let i = 0; i < index; i++) {
            currentNode = currentNode?.next;
        }
        return currentNode;
    }
    // set(value) {}
    // insert(value) {}
    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else if (this.tail) {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length += 1;
        return this;
    }
    pop() {
        if (!this.head) {
            return undefined;
        }
        let previousNode = this.head;
        let lastNode = this.head;
        while (lastNode.next) {
            previousNode = lastNode;
            lastNode = lastNode.next;
        }
        this.tail = previousNode;
        this.tail.next = null;
        this.length -= 1;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return lastNode;
    }
    unshift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length += 1;
        return this;
    }
    shift() {
        if (!this.head) {
            return undefined;
        }
        const shiftedNode = this.head;
        shiftedNode.next = null;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            const newFirstNode = this.head.next;
            this.head = newFirstNode;
        }
        this.length -= 1;
        return shiftedNode;
    }
    head;
    tail;
    length;
}
// const linkedList = new LinkedList(4);
exports.default = LinkedList;
