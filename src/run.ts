import LinearSearch from "./linear-search.js";
import BinarySearch from "./binary-search.js";
import SinglyLinkedList from "./LL.js";
import Stack from "./stack.js";

const list = new SinglyLinkedList<number>();
list.append(10);
list.append(20);
list.append(30);
list.prepend(5);
console.log("length:", list.length);
console.log("get(0):", list.get(0));
console.log("get(2):", list.get(2));
list.insertAt(15, 2);
console.log("after insertAt(15, 2):", list.get(2));
list.remove(20);
console.log("after remove(20), length:", list.length);
list.removeAt(0);
console.log("after removeAt(0), get(0):", list.get(0));

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
console.log("stack peek:", stack.peek());
console.log("stack pop:", stack.pop());
console.log("stack pop:", stack.pop());
stack.push(4);
console.log("stack peek after push(4):", stack.peek());

console.log(LinearSearch([3, 4, 5, 6], 6));
console.log(BinarySearch([2, 3, 4, 5, 6, 7, 8, 9], 7));

import { pre_order_search, in_order_search, post_order_search, BinaryNode } from "./treeTraversal.js";
const tree = {
  value: 20,
  left: { value: 10, left: { value: 5 }, right: { value: 15 } },
  right: { value: 30, left: { value: 25 }, right: { value: 35 } },
};
console.log("preorder:", pre_order_search(tree));
console.log("inorder:", in_order_search(tree));
console.log("postorder:", post_order_search(tree));

import bfs from "./BFS.js";
console.log("bfs(15):", bfs(tree, 15));
console.log("bfs(99):", bfs(tree, 99));

import dfs from "./DFS.js";
console.log("dfs(15):", dfs(tree, 15));
console.log("dfs(99):", dfs(tree, 99));
