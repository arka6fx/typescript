import { BinaryNode } from "./treeTraversal.js";
export default function dfs(
  curr: BinaryNode<number> | undefined,
  needle: number,
): boolean {
  if (!curr) return false;
  if (curr.value === needle) return true;
  return dfs(curr.left, needle) || dfs(curr.right, needle);
}
