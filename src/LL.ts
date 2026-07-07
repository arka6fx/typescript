interface LinkedList<T> {
  get length(): number;
  insertAt(item: T, index: number): void;
  remove(item: T): T | undefined;
  removeAt(index: number): T | undefined;
  append(item: T): void;
  prepend(item: T): void;
  get(index: number): T | undefined;
}

class ListNode<T> {
  value: T;
  next: ListNode<T> | undefined;

  constructor(value: T) {
    this.value = value;
  }
}

export default class SinglyLinkedList<T> implements LinkedList<T> {
  private head: ListNode<T> | undefined;
  private _length: number = 0;

  get length(): number {
    return this._length;
  }

  append(item: T): void {
    const node = new ListNode(item);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this._length++;
  }

  prepend(item: T): void {
    const node = new ListNode(item);
    node.next = this.head;
    this.head = node;
    this._length++;
  }

  insertAt(item: T, index: number): void {
    if (index < 0 || index > this._length) {
      throw new Error("Index out of bounds");
    }
    if (index === 0) {
      this.prepend(item);
      return;
    }
    const node = new ListNode(item);
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current!.next;
    }
    node.next = current!.next;
    current!.next = node;
    this._length++;
  }

  remove(item: T): T | undefined {
    if (!this.head) return undefined;
    if (this.head.value === item) {
      const val = this.head.value;
      this.head = this.head.next;
      this._length--;
      return val;
    }
    let current = this.head;
    while (current.next) {
      if (current.next.value === item) {
        const val = current.next.value;
        current.next = current.next.next;
        this._length--;
        return val;
      }
      current = current.next;
    }
    return undefined;
  }

  removeAt(index: number): T | undefined {
    if (index < 0 || index >= this._length) return undefined;
    if (index === 0) {
      const val = this.head!.value;
      this.head = this.head!.next;
      this._length--;
      return val;
    }
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current!.next;
    }
    const val = current!.next!.value;
    current!.next = current!.next!.next;
    this._length--;
    return val;
  }

  get(index: number): T | undefined {
    if (index < 0 || index >= this._length) return undefined;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current!.next;
    }
    return current!.value;
  }
}
