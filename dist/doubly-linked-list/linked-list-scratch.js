"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const linked_list_1 = __importDefault(require("./linked-list"));
const linkedList = new linked_list_1.default(0);
linkedList.push(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);
linkedList.push(5);
// Instantiate
console.log(linkedList);
const node5 = linkedList.get(5);
console.log(node5);
