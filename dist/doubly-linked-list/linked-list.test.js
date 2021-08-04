"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const linked_list_1 = __importDefault(require("./linked-list"));
describe('Linked List', () => {
    it('is a class', () => {
        chai_1.expect(typeof linked_list_1.default).to.be.equal('function');
    });
    it('can be instantiated', () => {
        const linkedList = new linked_list_1.default(0);
        chai_1.expect(linkedList.length).to.be.equal(1);
        chai_1.expect(linkedList.head?.value).to.deep.equal(0);
        chai_1.expect(linkedList.head?.next).to.deep.equal(null);
        chai_1.expect(linkedList.head).to.deep.equal(linkedList.tail);
    });
    describe('get', () => {
        it('exists', () => {
            const linkedList = new linked_list_1.default(0);
            chai_1.expect(typeof linkedList.get).to.be.equal('function');
        });
        describe('when called with a valid index', () => {
            it('should return a node at that index', () => {
                const linkedList = new linked_list_1.default(0);
                linkedList.push(1);
                linkedList.push(2);
                linkedList.push(3);
                const selectedNode = linkedList.get(3);
                chai_1.expect(selectedNode?.value).to.be.equal(3);
                chai_1.expect(selectedNode?.next).to.be.equal(null);
            });
        });
        describe('when called with an invalid index', () => {
            describe('and the index is -1', () => {
                it('should return undefined', () => {
                    const linkedList = new linked_list_1.default(0);
                    const selectedNode = linkedList.get(-1);
                    chai_1.expect(selectedNode).to.be.undefined;
                });
            });
            describe('and the index is equal to the length', () => {
                it('should return undefined', () => {
                    const linkedList = new linked_list_1.default(0);
                    const selectedNode = linkedList.get(1);
                    chai_1.expect(selectedNode).to.be.undefined;
                });
            });
            describe('and the index greater than the length', () => {
                it('should return undefined', () => {
                    const linkedList = new linked_list_1.default(0);
                    const selectedNode = linkedList.get(2);
                    chai_1.expect(selectedNode).to.be.undefined;
                });
            });
        });
    });
    describe('set', () => {
        it('exists', () => {
            const linkedList = new linked_list_1.default(0);
            chai_1.expect(typeof linkedList.set).to.be.equal('function');
        });
        describe('when called with a valid index', () => {
            it('should update the node value at that index', () => {
                const linkedList = new linked_list_1.default(0);
                linkedList.push(1);
                linkedList.push(2);
                linkedList.push(3);
                linkedList.set(2, 5);
                const selectedNode = linkedList.get(2);
                chai_1.expect(selectedNode?.value).to.be.equal(5);
            });
        });
    });
    describe('insert', () => {
        it('exists', () => {
            const linkedList = new linked_list_1.default(0);
            chai_1.expect(typeof linkedList.insert).to.be.equal('function');
        });
        describe('when called', () => {
            describe('with an invalid index', () => {
                describe('and the index is less than 0', () => {
                    it('should return false', () => {
                        const linkedList = new linked_list_1.default(0);
                        const result = linkedList.insert(-1, 1);
                        chai_1.expect(result).to.be.false;
                    });
                });
                describe('and the index is greater than the length', () => {
                    it('should return false', () => {
                        const linkedList = new linked_list_1.default(0);
                        const result = linkedList.insert(5, 1);
                        chai_1.expect(result).to.be.false;
                    });
                });
            });
            describe('with a valid index', () => {
                describe('and the index is equal to 0', () => {
                    it('should insert a node at the begining of the linked list', () => {
                        const linkedList = new linked_list_1.default(0);
                        linkedList.push(1);
                        linkedList.push(2);
                        linkedList.push(3);
                        linkedList.insert(0, 5);
                        const node1 = linkedList.get(1);
                        chai_1.expect(linkedList.length).to.be.equal(5);
                        chai_1.expect(linkedList.head?.value).to.be.equal(5);
                        chai_1.expect(linkedList.head?.next).to.deep.equal(node1);
                    });
                });
                describe('and the index is equal to the length', () => {
                    it('should insert a node at the end of the linked list', () => {
                        const linkedList = new linked_list_1.default(0);
                        linkedList.push(1);
                        linkedList.push(2);
                        linkedList.push(3);
                        linkedList.insert(4, 5);
                        const node3 = linkedList.get(3);
                        chai_1.expect(linkedList.length).to.be.equal(5);
                        chai_1.expect(linkedList.tail?.value).to.be.equal(5);
                        chai_1.expect(linkedList.tail?.next).to.be.equal(null);
                        chai_1.expect(node3?.next).to.deep.equal(linkedList.tail);
                    });
                });
                describe('and the index falls inside bounds of linked list', () => {
                    it('should insert a node at index', () => {
                        const linkedList = new linked_list_1.default(0);
                        linkedList.push(1);
                        linkedList.push(3);
                        linkedList.push(4);
                        linkedList.insert(2, 2);
                        const node1 = linkedList.get(1);
                        const node2 = linkedList.get(2);
                        const node3 = linkedList.get(3);
                        chai_1.expect(linkedList.length).to.be.equal(5);
                        chai_1.expect(node2?.value).to.be.equal(2);
                        chai_1.expect(node2?.next).to.deep.equal(node3);
                        chai_1.expect(node1?.next).to.deep.equal(node2);
                    });
                });
            });
        });
    });
    describe('remove', () => {
        it('exists', () => {
            const linkedList = new linked_list_1.default(0);
            chai_1.expect(typeof linkedList.insert).to.be.equal('function');
        });
        describe('when called', () => {
            describe('with an invalid index', () => {
                describe('and the index is less than 0', () => {
                    it('should return false', () => {
                        const linkedList = new linked_list_1.default(0);
                        const result = linkedList.remove(-1);
                        chai_1.expect(result).to.be.false;
                    });
                });
                describe('and the index is greater than the length', () => {
                    it('should return false', () => {
                        const linkedList = new linked_list_1.default(0);
                        const result = linkedList.remove(5);
                        chai_1.expect(result).to.be.false;
                    });
                });
            });
            describe('with a valid index', () => {
                describe('and the index is equal to 0', () => {
                    it('should remove a node at the begining of the linked list', () => {
                        const linkedList = new linked_list_1.default(0);
                        linkedList.push(1);
                        linkedList.push(2);
                        linkedList.push(3);
                        linkedList.remove(0);
                        chai_1.expect(linkedList.length).to.be.equal(3);
                        chai_1.expect(linkedList.head?.value).to.be.equal(1);
                    });
                });
                describe('and the index is equal to the length', () => {
                    it('should remove a node at the end of the linked list', () => {
                        const linkedList = new linked_list_1.default(0);
                        linkedList.push(1);
                        linkedList.push(2);
                        linkedList.push(3);
                        linkedList.remove(4);
                        chai_1.expect(linkedList.length).to.be.equal(3);
                        chai_1.expect(linkedList.tail?.value).to.be.equal(2);
                        chai_1.expect(linkedList.tail?.next).to.be.equal(null);
                    });
                });
                describe('and the index falls inside bounds of linked list', () => {
                    it('should remove a node at index', () => {
                        const linkedList = new linked_list_1.default(0);
                        linkedList.push(1);
                        linkedList.push(2);
                        linkedList.push(3);
                        const node1 = linkedList.get(1);
                        const node2 = linkedList.get(2);
                        const node3 = linkedList.get(3);
                        linkedList.remove(2);
                        chai_1.expect(linkedList.length).to.be.equal(3);
                        chai_1.expect(node2?.value).to.deep.equal(2);
                        chai_1.expect(node2?.next).to.deep.equal(null);
                        chai_1.expect(node1?.next).to.deep.equal(node3);
                    });
                });
            });
        });
    });
    describe('push', () => {
        it('exists', () => {
            const linkedList = new linked_list_1.default(0);
            chai_1.expect(typeof linkedList.push).to.be.equal('function');
        });
        describe('when called', () => {
            describe('and linked list has nodes', () => {
                it('should push new a node onto linked list', () => {
                    let pushResult;
                    const linkedList = new linked_list_1.default(0);
                    linkedList.push(1);
                    linkedList.push(2);
                    pushResult = linkedList.push(3);
                    chai_1.expect(linkedList.length).to.be.equal(4);
                    chai_1.expect(linkedList.head?.value).to.be.equal(0);
                    chai_1.expect(linkedList.tail?.value).to.be.equal(3);
                    chai_1.expect(linkedList.tail?.next).to.be.equal(null);
                    chai_1.expect(pushResult).to.deep.equal(linkedList);
                });
            });
            describe('and linked list does not have nodes', () => {
                it('should push new node onto linked list', () => {
                    const linkedList = new linked_list_1.default(0);
                    linkedList.pop();
                    chai_1.expect(linkedList.length).to.be.equal(0);
                    linkedList.push(1);
                    chai_1.expect(linkedList.length).to.be.equal(1);
                    chai_1.expect(linkedList.head?.value).to.be.equal(1);
                    chai_1.expect(linkedList.head?.next).to.be.equal(null);
                    chai_1.expect(linkedList.head).to.deep.equal(linkedList.tail);
                });
            });
        });
    });
    describe('pop', () => {
        it('exists', () => {
            const linkedList = new linked_list_1.default(0);
            chai_1.expect(typeof linkedList.pop).to.be.equal('function');
        });
        describe('when called', () => {
            describe('and linked list has more than one nodes', () => {
                it('should pop the last node off the linked list', () => {
                    let popResult;
                    const linkedList = new linked_list_1.default(0);
                    linkedList.push(1);
                    linkedList.push(2);
                    linkedList.push(3);
                    popResult = linkedList.pop();
                    chai_1.expect(linkedList.length).to.be.equal(3);
                    chai_1.expect(popResult?.value).to.be.equal(3);
                    chai_1.expect(popResult?.next).to.be.equal(null);
                });
            });
            describe('and linked list has one node', () => {
                it('should pop the last node off the linked list', () => {
                    const linkedList = new linked_list_1.default(0);
                    const popResult = linkedList.pop();
                    chai_1.expect(linkedList.length).to.be.equal(0);
                    chai_1.expect(linkedList.head).to.be.equal(null);
                    chai_1.expect(linkedList.tail).to.be.equal(null);
                    chai_1.expect(popResult?.value).to.be.equal(0);
                    chai_1.expect(popResult?.next).to.be.equal(null);
                });
            });
            describe('and linked list has zero nodes', () => {
                it('should pop the last node off the linked list', () => {
                    const linkedList = new linked_list_1.default(0);
                    linkedList.pop();
                    const popResult = linkedList.pop();
                    chai_1.expect(linkedList.length).to.be.equal(0);
                    chai_1.expect(linkedList.head).to.be.equal(null);
                    chai_1.expect(linkedList.tail).to.be.equal(null);
                    chai_1.expect(popResult).to.be.equal(undefined);
                });
            });
        });
    });
    describe('unshift', () => {
        it('exists', () => {
            const linkedList = new linked_list_1.default(0);
            chai_1.expect(typeof linkedList.unshift).to.be.equal('function');
        });
        describe('when called', () => {
            describe('and linked list has nodes', () => {
                it('should unshift a new node onto the front of the linked list', () => {
                    const linkedList = new linked_list_1.default(1);
                    linkedList.push(2);
                    linkedList.push(3);
                    linkedList.unshift(0);
                    const node1 = linkedList.get(1);
                    chai_1.expect(linkedList.length).to.be.equal(4);
                    chai_1.expect(linkedList.head?.value).to.be.equal(0);
                    chai_1.expect(linkedList.head?.next).to.deep.equal(node1);
                });
            });
            describe('and linked list does not have nodes', () => {
                it('should unshift a new node onto the front of the linked list', () => {
                    const linkedList = new linked_list_1.default(0);
                    linkedList.pop();
                    chai_1.expect(linkedList.length).to.be.equal(0);
                    linkedList.unshift(1);
                    chai_1.expect(linkedList.head?.value).to.be.equal(1);
                    chai_1.expect(linkedList.head).to.deep.equal(linkedList.tail);
                });
            });
        });
    });
    describe('shift', () => {
        it('exists', () => {
            const linkedList = new linked_list_1.default(0);
            chai_1.expect(typeof linkedList.shift).to.be.equal('function');
        });
        describe('when called', () => {
            describe('and linked list has more than one nodes', () => {
                it('should shift a node off the front of the linked list', () => {
                    const linkedList = new linked_list_1.default(0);
                    linkedList.push(1);
                    linkedList.push(2);
                    linkedList.push(3);
                    const node1 = linkedList.get(1);
                    const shiftResult = linkedList.shift();
                    chai_1.expect(linkedList.length).to.be.equal(3);
                    chai_1.expect(linkedList.head).to.deep.equal(node1);
                    chai_1.expect(shiftResult?.value).to.be.equal(0);
                    chai_1.expect(shiftResult?.next).to.be.equal(null);
                });
            });
            describe('and linked list has one node', () => {
                it('should shift a node off the front of the linked list', () => {
                    let shiftResult;
                    const linkedList = new linked_list_1.default(0);
                    shiftResult = linkedList.shift();
                    chai_1.expect(shiftResult?.value).to.be.equal(0);
                    chai_1.expect(shiftResult?.next).to.be.equal(null);
                    chai_1.expect(linkedList.length).to.be.equal(0);
                    chai_1.expect(linkedList.head).to.be.equal(null);
                    chai_1.expect(linkedList.tail).to.be.equal(null);
                });
            });
            describe('and linked list has zero nodes', () => {
                it('should shift a node off the front of the linked list', () => {
                    let shiftResult;
                    const linkedList = new linked_list_1.default(0);
                    linkedList.pop();
                    chai_1.expect(linkedList.length).to.be.equal(0);
                    chai_1.expect(linkedList.head).to.be.equal(null);
                    shiftResult = linkedList.shift();
                    chai_1.expect(shiftResult).to.be.undefined;
                    chai_1.expect(linkedList.length).to.be.equal(0);
                });
            });
        });
    });
    describe('reverse', () => {
        it('exists', () => {
            const linkedList = new linked_list_1.default(0);
            chai_1.expect(typeof linkedList.reverse).to.be.equal('function');
        });
        describe('when called', () => {
            it('should reverse the linked list', () => {
                const linkedList = new linked_list_1.default(0);
                linkedList.push(1);
                linkedList.push(2);
                linkedList.push(3);
                linkedList.reverse();
                const node0 = linkedList.get(0);
                const node1 = linkedList.get(1);
                const node2 = linkedList.get(2);
                const node3 = linkedList.get(3);
                chai_1.expect(node0?.value).to.be.equal(3);
                chai_1.expect(node1?.value).to.be.equal(2);
                chai_1.expect(node2?.value).to.be.equal(1);
                chai_1.expect(node3?.value).to.be.equal(0);
            });
        });
    });
});
