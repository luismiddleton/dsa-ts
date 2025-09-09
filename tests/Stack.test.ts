import { describe, it, expect } from "vitest";
import { Stack } from '../src/Stack';

describe('Stack (LIFO)', () => {
  it('should start empty', () => {
    const stack = new Stack<number>();
    expect(stack.isEmpty()).toBe(true);
    expect(stack.peek()).toBeUndefined();
  });

  it('should add elements and not be empty', () => {
    const stack = new Stack<number>();
    stack.add(1);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.peek()).toBe(1);
  });

  it('should add and remove elements in LIFO order', () => {
    const stack = new Stack<number>();
    stack.add(1);
    stack.add(2);
    stack.add(3);
    expect(stack.peek()).toBe(3);
    stack.remove();
    expect(stack.peek()).toBe(2);
    stack.remove();
    expect(stack.peek()).toBe(1);
    stack.remove();
    expect(stack.isEmpty()).toBe(true);
    expect(stack.peek()).toBeUndefined();
  });

  it('should do nothing when removing from empty stack', () => {
    const stack = new Stack<number>();
    expect(() => stack.remove()).not.toThrow();
    expect(stack.isEmpty()).toBe(true);
  });

  it('should handle single element stack', () => {
    const stack = new Stack<number>();
    stack.add(42);
    expect(stack.peek()).toBe(42);
    stack.remove();
    expect(stack.isEmpty()).toBe(true);
    expect(stack.peek()).toBeUndefined();
  });
});