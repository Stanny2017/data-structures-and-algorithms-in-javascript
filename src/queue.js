/**
 * 队列的实现
 */

class Queue {
    constructor() {
        this.values = []
    }

    // 入队--队尾排队
    enqueue(v) {
        Array.prototype.push.call(this.values, v)
        // this.values.push(v)
    }

    // 出队--队头出队
    shift() {
        Array.prototype.shift.call(this.values)
        // this.values.pop()
    }

    clear() {
        this.values = []
    }

    print() {
        console.log(this.values.join())
    }

    get size() {
        return this.values.length
    }

    get isEmpty() {
        return this.values.length === 0
    }
}
