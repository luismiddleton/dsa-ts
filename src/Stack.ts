import { AbstractLinkedList, Node } from "./LinkedList";

/**
 * Stack implementation using a singly linked list (LIFO behavior).
 *
 * @typeParam T - The type of elements stored in the stack.
 *
 * @remarks
 * Elements are added and removed from the top (head) of the stack.
 */
export class Stack<T> extends AbstractLinkedList<T> {
	/**
	 * Adds an element to the top of the stack.
	 * @param data The data to push onto the stack.
	 */
	add(data: T): void {
		const newNode = new Node(data);
		newNode.next = this.head;
		this.head = newNode;
	}

	/**
	 * Removes the element from the top of the stack.
	 * @param _data Not used, present for compatibility with AbstractLinkedList.
	 */
	remove(_data?: T): void {
		if (!this.head) return;
		this.head = this.head.next;
	}

	/**
	 * Returns the value at the top of the stack without removing it.
	 * @returns The value at the head of the stack, or undefined if the stack is empty.
	 */
	peek(): T | undefined {
		return this.head ? this.head.data : undefined;
	}
}
