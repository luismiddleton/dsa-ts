import { describe, it, expect } from 'vitest';
import { SinglyLinkedList, DoubleLinkedList, AbstractLinkedList } from '../src/LinkedList';

describe('SinglyLinkedList', () => {
    it('should start empty', () => {
        const list = new SinglyLinkedList<number>();
        expect(list.isEmpty()).toBe(true);
    });

    it('should add elements and not be empty', () => {
        const list = new SinglyLinkedList<number>();
        list.add(1);
        expect(list.isEmpty()).toBe(false);
        list.add(2);
        list.add(3);
        // Remove all and check empty again
        list.remove(1);
        list.remove(2);
        list.remove(3);
        expect(list.isEmpty()).toBe(true);
    });

    it('should remove head correctly', () => {
        const list = new SinglyLinkedList<number>();
        list.add(1);
        list.add(2);
        list.remove(1);
        expect(list.isEmpty()).toBe(false);
        list.remove(2);
        expect(list.isEmpty()).toBe(true);
    });

    it('should remove tail correctly', () => {
        const list = new SinglyLinkedList<number>();
        list.add(1);
        list.add(2);
        list.add(3);
        list.remove(3);
        list.remove(2);
        list.remove(1);
        expect(list.isEmpty()).toBe(true);
    });

    it('should remove middle element', () => {
        const list = new SinglyLinkedList<number>();
        list.add(1);
        list.add(2);
        list.add(3);
        list.remove(2);
        // Remove remaining
        list.remove(1);
        list.remove(3);
        expect(list.isEmpty()).toBe(true);
    });

    it('should do nothing when removing from empty list', () => {
        const list = new SinglyLinkedList<number>();
        expect(() => list.remove(1)).not.toThrow();
        expect(list.isEmpty()).toBe(true);
    });

    it('should do nothing when removing non-existent element', () => {
        const list = new SinglyLinkedList<number>();
        list.add(1);
        list.remove(2);
        expect(list.isEmpty()).toBe(false);
    });
});

describe('DoubleLinkedList', () => {
    it('should start empty', () => {
        const list = new DoubleLinkedList<string>();
        expect(list.isEmpty()).toBe(true);
    });

    it('should add elements and not be empty', () => {
        const list = new DoubleLinkedList<string>();
        list.add('a');
        expect(list.isEmpty()).toBe(false);
        list.add('b');
        list.add('c');
        // Remove all and check empty again
        list.remove('a');
        list.remove('b');
        list.remove('c');
        expect(list.isEmpty()).toBe(true);
    });

    it('should remove head correctly', () => {
        const list = new DoubleLinkedList<number>();
        list.add(1);
        list.add(2);
        list.remove(1);
        expect(list.isEmpty()).toBe(false);
        list.remove(2);
        expect(list.isEmpty()).toBe(true);
    });

    it('should remove tail correctly', () => {
        const list = new DoubleLinkedList<number>();
        list.add(1);
        list.add(2);
        list.add(3);
        list.remove(3);
        list.remove(2);
        list.remove(1);
        expect(list.isEmpty()).toBe(true);
    });

    it('should remove middle element', () => {
        const list = new DoubleLinkedList<number>();
        list.add(1);
        list.add(2);
        list.add(3);
        list.remove(2);
        // Remove remaining
        list.remove(1);
        list.remove(3);
        expect(list.isEmpty()).toBe(true);
    });

    it('should do nothing when removing from empty list', () => {
        const list = new DoubleLinkedList<number>();
        expect(() => list.remove(1)).not.toThrow();
        expect(list.isEmpty()).toBe(true);
    });

    it('should do nothing when removing non-existent element', () => {
        const list = new DoubleLinkedList<number>();
        list.add(1);
        list.remove(2);
        expect(list.isEmpty()).toBe(false);
    });
});