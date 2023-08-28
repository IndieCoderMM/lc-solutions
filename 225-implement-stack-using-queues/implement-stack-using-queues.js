var MyStack = function() {
   this.queue = new MyQueue();
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue.enqueue(x);
    this.topItem = x;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    const helper = new MyQueue();
    while (this.queue.size() > 1) {
        this.topItem = this.queue.dequeue();
        helper.enqueue(this.topItem);
    }
    const poped = this.queue.dequeue();
    this.queue = helper;

    return poped;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.topItem;
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