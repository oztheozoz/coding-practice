// https://leetcode.com/problems/implement-stack-using-queues/
/**
 * Initialize your data structure here.
 */
var MyStack = function() {
    this.queue1 = [];
    this.queue2 = [];
    this.lastElement
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    var queue = this.queue1.length > this.queue2.length ? this.queue1 : this.queue2;
    this.lastElement = x;
    queue.push(this.lastElement);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    if(this.queue1.length > 0) {
        while(this.queue1.length > 1) {
            this.lastElement = this.queue1.shift();
            this.queue2.push(this.lastElement);
        }
        return this.queue1.shift();
    } else if(this.queue2.length > 0) {
        while(this.queue2.length > 1) {
            this.lastElement = this.queue2.shift();
            this.queue1.push(this.lastElement);
        }
        return this.queue2.shift();
    }
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.lastElement;
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue1.length === 0 && this.queue2.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = Object.create(MyStack).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */