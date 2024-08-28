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


        if (index === 0) {
            this.addFirst(data); // vis index er 0 så bare bruker vi addFirst 
        } else if (index === this.size) {
            this.addLast(data); // vis index er samme som size bruker vi addLast
        } else {


            
        }
            


    }

    removeFirst() {
        if (!this.head) return; // er lista tom så bare return
        if(!this.head.nextNode) {
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

liste1.printList();