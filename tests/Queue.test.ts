import { describe, it, expect } from 'vitest';
import { Queue } from '../src/Queue';

describe('Queue (FIFO)', () => {
  it('should start empty', () => {
    const queue = new Queue<number>();
    expect(queue.isEmpty()).toBe(true);
    expect(queue.peek()).toBeUndefined();
  });

  it('should add elements and not be empty', () => {
    const queue = new Queue<number>();
    queue.add(1);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.peek()).toBe(1);
  });

  it('should add and remove elements in FIFO order', () => {
    const queue = new Queue<number>();
    queue.add(1);
    queue.add(2);
    queue.add(3);
    expect(queue.peek()).toBe(1);
    queue.remove();
    expect(queue.peek()).toBe(2);
    queue.remove();
    expect(queue.peek()).toBe(3);
    queue.remove();
    expect(queue.isEmpty()).toBe(true);
    expect(queue.peek()).toBeUndefined();
  });

  it('should update tail correctly', () => {
    const queue = new Queue<number>();
    queue.add(1);
    expect((queue as any).tail.data).toBe(1);
    queue.add(2);
    expect((queue as any).tail.data).toBe(2);
    queue.remove();
    queue.remove();
    expect((queue as any).tail).toBeNull();
  });

  it('should do nothing when removing from empty queue', () => {
    const queue = new Queue<number>();
    expect(() => queue.remove()).not.toThrow();
    expect(queue.isEmpty()).toBe(true);
  });

  it('should handle single element queue', () => {
    const queue = new Queue<number>();
    queue.add(42);
    expect(queue.peek()).toBe(42);
    queue.remove();
    expect(queue.isEmpty()).toBe(true);
    expect(queue.peek()).toBeUndefined();
  });
});
