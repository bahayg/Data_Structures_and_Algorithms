class SinglyLinkedListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

function insertNodeAtTail(head, data) {
    let newNode = new SinglyLinkedListNode(data)
    if (!head) {
        head = newNode 
        return head
    }
    let current  = head
    while (current.next) {
        current = current.next
    }
    current.next = newNode
    return head
}
