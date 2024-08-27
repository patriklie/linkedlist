export default class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }

    get nextNode() {
        return this.next;
    }

    set nextNode(node) {
        this.next = node;
    }
}