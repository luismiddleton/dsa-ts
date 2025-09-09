/**
 * Represents a node in a linked list.
 *
 * @typeParam T - The type of data stored in the node.
 *
 * @remarks
 * Each node contains a data element and references to the next (and optionally previous) node in the list.
 * Used internally by linked list implementations.
 */
export class Node<T> {
  public data: T;
  public next: Node<T> | null;
  public prev: Node<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

/**
 * Abstract base class for linked list data structures.
 *
 * @typeParam T - The type of elements stored in the linked list.
 *
 * @remarks
 * This class provides the foundational structure and interface for linked list implementations.
 * It manages the head node and defines abstract methods for adding and removing elements.
 * Concrete subclasses must implement the `add` and `remove` methods to define specific behaviors
 * (e.g., singly or doubly linked lists).
 */
export abstract class AbstractLinkedList<T> {
  protected head: Node<T> | null;

  constructor() {
    this.head = null;
  }

  /**
   * Adds a new element to the linked list.
   * @param data The data to add to the list.
   * @remarks
   * The specific behavior (e.g., where the element is added) depends on the concrete implementation.
   */
  abstract add(data: T): void;

  /**
   * Removes the first occurrence of the specified element from the linked list.
   * @param data The data to remove from the list.
   * @remarks
   * The specific behavior (e.g., how duplicates are handled) depends on the concrete implementation.
   */
  abstract remove(data: T): void;

  public isEmpty(): boolean {
    return this.head === null;
  }
}

/**
 * A singly linked list implementation where each node has a reference only to the next node.
 *
 * @typeParam T - The type of elements stored in the list.
 *
 * @remarks
 * This class is suitable for use cases where unidirectional traversal is sufficient and memory usage should be minimized.
 * It allows efficient insertion at the end and removal of elements by value.
 */
export class SinglyLinkedList<T> extends AbstractLinkedList<T> {
  protected tail: Node<T> | null;

  constructor() {
    super();
    this.tail = null;
  }

  add(data: T): void {
    const newNode = new Node(data);
    if (this.tail) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }
    this.tail = newNode;
  }

  remove(data: T): void {
    if (!this.head) return;

    // Remove head node if it matches
    if (this.head.data === data) {
      this.head = this.head.next;
      if (!this.head) this.tail = null;
      return;
    }

    // Find the node before the one to remove
    let current = this.head;
    while (current.next && current.next.data !== data) {
      current = current.next;
    }

    // Remove the node if found
    if (current.next) {
      current.next = current.next.next;
      if (!current.next) this.tail = current;
    }
  }
}

/**
 * A doubly linked list implementation where each node has references to both the next and previous nodes.
 *
 * @typeParam T - The type of elements stored in the list.
 *
 * @remarks
 * This class allows efficient insertion and removal of elements from both ends and from the middle of the list.
 * It is suitable for use cases where bidirectional traversal or frequent insertions/removals are required.
 */
export class DoubleLinkedList<T> extends AbstractLinkedList<T> {
  protected tail: Node<T> | null;

  constructor() {
    super();
    this.tail = null;
  }

  add(data: T): void {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  remove(data: T): void {
    if (!this.head) return;

    let current = this.head;
    while (current) {
      if (current.data === data) {
        // If node is head
        if (current.prev === null) {
          this.head = current.next;
          if (this.head) this.head.prev = null;
          else this.tail = null;
          return;
        }

        // If node is tail
        if (current.next === null) {
          this.tail = current.prev;
          if (this.tail) this.tail.next = null;
          return;
        }

        // Node is in the middle
        current.prev.next = current.next;
        current.next.prev = current.prev;
        return;
      }
      current = current.next as Node<T>;
    }
  }
}
