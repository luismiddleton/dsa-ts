import { AbstractLinkedList, Node } from "./LinkedList";

/**
 * A LIFO (Last-In-First-Out) queue implementation using a singly linked list.
 *
 * @typeParam T - The type of elements stored in the queue.
 *
 * @remarks
 * This class behaves like a stack, where elements are added and removed from the front (head).
 * Use this when you need stack-like behavior with the AbstractLinkedList interface.
 */
export class Queue<T> extends AbstractLinkedList<T> {
  // We need to keep track of the tail for efficient enqueuing
  private tail: Node<T> | null;

  constructor() {
    super();
    this.tail = null;
  }

  /**
   * Adds an element to the end of the queue (FIFO behavior).
   * @param data The data to add.
   */
  add(data: T): void {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
  }

  /**
   * Removes the element from the front of the queue (FIFO behavior).
   * @param _data Not used, present for compatibility with AbstractLinkedList.
   */
  remove(_data?: T): void {
    if (!this.head) return;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
  }

  /**
   * Returns the value at the front of the queue without removing it.
   * @returns The value at the head of the queue, or undefined if the queue is empty.
   */
  peek(): T | undefined {
    return this.head ? this.head.data : undefined;
  }
}
