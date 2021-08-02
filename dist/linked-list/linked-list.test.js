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
            describe('and linked list has nodes', () => {
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
            describe('and linked list does not have nodes', () => {
                it('should return undefined', () => {
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
});
