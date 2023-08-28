var MyStack = function() {
   this.queue = new MyQueue();
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue.enqueue(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    const helper = new MyQueue();
    const size = this.queue.size();
    while (helper.size() < size - 1) {
        helper.enqueue(this.queue.dequeue());
    }
    while (!helper.empty()) {
        this.queue.enqueue(helper.dequeue());
    }

    return this.queue.dequeue();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    const helper = new MyQueue();
    const size = this.queue.size();
    let top = null;
    while (helper.size() < size) {
        top = this.queue.peek();
        helper.enqueue(this.queue.dequeue());
    }
    while (!helper.empty()) {
        this.queue.enqueue(helper.dequeue());
    }
    return top;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue.empty();
};


class MyQueue {
    constructor () {
        this.list = [];
    }

    enqueue(val) {
        this.list.push(val);
    }

    dequeue() {
        return this.list.shift();
    }

    size() {
        return this.list.length;
    }

    peek() {
        return this.list[0];
    }

    empty() {
        return this.list.length === 0;
    }
}

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */