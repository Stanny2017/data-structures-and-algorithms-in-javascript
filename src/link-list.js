/**
 * 链表实现
 */

// 链表节点
class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}


class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }

    append(val) {
        if (!this.head) {
            this.head = new ListNode(val)
        } else {
            let lastNode = this.head
            while (lastNode.next) {
                lastNode = lastNode.next
            }

            lastNode.next = new ListNode(val)
        }

        this.length++;
    }

    insert(position, val) {
        if (position < 0 || position > this.length) return false

        const insertNode = new ListNode(val)
        if (position === 0) {
            // 需要考虑插入的是第一个节点
            insertNode.next = this.head
            this.head = insertNode
        } else {
            let current = this.head
            let previous = null
            for (let i = 0; i < position; i++) {
                previous = current
                current = current.next
            }

            insertNode.next = current.next
            previous.next = insertNode
            this.length++
        }
    }

    removeAt(position) {
        if (this.length === 0 || position > this.length - 1) return false

        if (position === 0) {
            this.head = this.head.next
            return true
        }

        let current = null
        let previous = null
        let next = null
        for (let i = 0; i < position + 1; i++) {
            if (i === 0) {
                current = this.head
                continue
            }
            previous = current
            next = current.next
            current = current.next
        }

        // 遍历完成，此时 current 指向 position 下标，即要删除的节点
        previous.next = next
        return true
    }

    remove(targetValue) {
        let current = this.head
        let previous
        let next
        let hasFindTarget = false

        while (current) {
            if (current.val === targetValue) {
                hasFindTarget = true
                next = current.next
                break
            }

            previous = current
            current = current.next
        }

        if (hasFindTarget) {
            if (!previous) {
                // 要删除的是第一个节点
                this.head = this.head.next
            } else {
                previous = current
                next = current.next
                current = current.next
            }

            return true
        } else {
            return false
        }
    }

    findIndex(targetValue) {
        let current = this.head
        let index = 0
        let hasFindTarget = false

        while (current) {
            if (current.val === targetValue) {
                hasFindTarget = true

                break;
            }

            current = current.next
            index++;
        }

        return hasFindTarget ? index : false
    }

    get size() {
        return this.length
    }

    get isEmpty() {
        return this.length === 0
    }
}