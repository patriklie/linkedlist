import Node from './node.mjs';

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    addFirst(data) {
        const newNode = new Node(data);
        const currentHead = this.head;
        this.head = newNode;
        newNode.nextNode = currentHead;
        this.size++;
    }

    addLast(data) {
        const newNode = new Node(data);
        let current = this.head;

        if (!current) {
            this.head = newNode;
            return;
        } else {
            while (current.nextNode) {
                current = current.nextNode;
            }
            current.nextNode = newNode;
        }
        this.size++;
    }

    addAtIndex(data, index) {
        if (index > this.size) {
            console.log('Index does not exist'); //sjekker om oppgitt index faktisk finnes
            return;
        }

        if (index === 0 || !this.head) {
            this.addFirst(data); // vis index er 0 eller lista er tom så bruker vi addFirst  VURDER ELSE IF på disse da
        } else if (index === this.size) {
            this.addLast(data); // vis index er samme som size bruker vi addLast
        } else {
            let current = this.head;
            let previous = null;
            let count = 0;
            const newNode = new Node(data);

            while (count < index) {
                previous = current;
                current = current.nextNode;
                count++;
            }     
            previous.nextNode = newNode;
            newNode.nextNode = current;
            this.size++;
        }
    }

    removeAtIndex(index) {
        if (!this.head) {
            console.log("Empty list nothing to remove!");
            return;
        } // er lista tom så bare return

        if (index < 0 || index >= this.size) {
            console.log("Index is out of bonds, nothing to remove here!");
            return;
        }

        let current = this.head;
        let previous = null;
        let count = 0;

        while (count < index) {
            previous = current;
            current = current.nextNode;
            count++;
        }

        previous.nextNode = current.nextNode;
        current.nextNode = null;
        this.size--;
    }

    removeFirst() {
        if (!this.head) return; // er lista tom så bare return
        if (!this.head.nextNode) {
            this.head = null; // er det kun en node i lista så sett head til null
        } else {
            this.head = this.head.nextNode;
        }
        this.size--;
    }

    removeLast() {
        if (!this.head) return; // return hvis lista er tom
        if (!this.head.nextNode) {
            this.head = null; // fjern head om det kun er et element i lista
        } else {
            let current = this.head;
            let previous = null;

            while (current.nextNode) {
                previous = current;
                current = current.nextNode;
            }
            previous.nextNode = null;
        }
        this.size--;
    }



    printList() {
        if (!this.head) {
            console.log("Empty list");
        } else {
            let current = this.head;
            while (current) {
                console.log(current.data)
                current = current.nextNode;
            }
        }
    }
}

const liste1 = new LinkedList();

liste1.addFirst(400);
liste1.addFirst(300);
liste1.addFirst(200);
liste1.addFirst(100);

liste1.addAtIndex(500, 3);

liste1.printList();