export type BinaryNode<T> = {
  value: T;
  left?: BinaryNode<T>;
  right?: BinaryNode<T>;
};
function walk(curr: BinaryNode<number> | undefined, path: number[]): void {
  if (!curr) {
    return;
  }
  //pre-order walk (root left right)
  path.push(curr.value);
  walk(curr.left, path);
  walk(curr.right, path);
}
function inWalk(curr: BinaryNode<number> | undefined, path: number[]): void {
  if (!curr) {
    return;
  }
  //in-order walk (left root right)
  inWalk(curr.left, path);
  path.push(curr.value);
  inWalk(curr.right, path);
}
function postWalk(curr: BinaryNode<number> | undefined, path: number[]): void {
  if (!curr) {
    return;
  }
  //post-order walk (left right root)
  postWalk(curr.left, path);
  postWalk(curr.right, path);
  path.push(curr.value);
}
export function pre_order_search(head: BinaryNode<number>): number[] {
  const path: number[] = [];
  walk(head, path);
  return path;
}
export function in_order_search(head: BinaryNode<number>): number[] {
  const path: number[] = [];
  inWalk(head, path);
  return path;
}
export function post_order_search(head: BinaryNode<number>): number[] {
  const path: number[] = [];
  postWalk(head, path);
  return path;
}
