type SNode<T> = {
  value: T;
  prev?: SNode<T>;
};
export default class Stack<T> {
  public length: number;
  private head?: SNode<T>;
  constructor() {
    this.head = undefined;
    this.length = 0;
  }
  push(item: T): void {
    const node = { value: item } as SNode<T>;
    this.length++;
    if (!this.head) {
      this.head = node;
      return;
    }
    node.prev = this.head;
    this.head = node;
  }
  pop(): T | undefined {
    if (!this.head) {
      return undefined;
    }
    this.length--;
    let val = this.head.value;
    this.head = this.head.prev;

    return val;
  }
  peek(): T | undefined {
    // if (!this.head) {
    //   return undefined;
    // } else {
    //   return this.head.value;
    // }
    return this.head?.value;
  }
}
