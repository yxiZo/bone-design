
export const add = (a, b) => {
    return a + b
}

export class Queue {
    constructor() {
        this.elements = {};
        this.head = 0;
        this.tail = 0;
    }
    enqueue(element) {
        this.elements[this.tail] = element;
        this.tail++;
    }
    dequeue(callback) {
        const item = this.elements[this.head];
        if (callback) callback(item);
        delete this.elements[this.head];
        this.head++;
        return item;
    }
    peek() {
        return this.elements[this.head];
    }
    length() {
        return this.tail - this.head;
    }
    isEmpty() {
        return this.length() === 0;
    }
}
