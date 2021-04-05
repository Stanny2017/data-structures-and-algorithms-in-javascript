/**
 * 栈的实现
 * 先进先出
 */

class Stack {
    constructor() {
        this.values = []
    }

    push(v) {
        Array.prototype.push.call(this.values, v)
        // this.values.push(v)
    }

    pop() {
        Array.prototype.pop.call(this.values)
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


// test
const s = new Stack()
s.push('test1')
s.pop()
console.log(s.isEmpty)
s.push('test2')
s.push('test3')
console.log(s.size)
s.print()
s.clear()
console.log(s.size)

