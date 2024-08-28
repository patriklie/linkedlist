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

    swapNodes(node1, node2) {
        if (!this.head) return; // empty list bare returner
        if (node1.data === node2.data) return; // Hvis nodene er helt like så bare return trenger ikke swappe dem

        // Lokalisere nodene i lista:

        let currentNode1 = this.head;
        let previousNode1 = null;
        let currentNode2 = this.head;
        let previousNode2 = null;

        while (currentNode1 !== node1) {
            previousNode1 = currentNode1;
            currentNode1 = currentNode1.nextNode;
        }

        while(currentNode2 !== node2) {
            previousNode2 = currentNode2;
            currentNode2 = currentNode2.nextNode;
        }

        if (!currentNode1) {
            console.log("Did not find the first node in the list!");
            return;
        }

        if (!currentNode2) {
            console.log("Did no find the second node in the list");
            return;
        }

        // Her sjekker jeg om prev1 noden er null for da er den funnet men den er head i lista
        if (!previousNode1) {
            this.head = currentNode2; // setter head til node2;

            let temp = currentNode2.nextNode
            currentNode2.nextNode = currentNode1.nextNode; // node 2 sin neste node er node1 sin gamle neste

            previousNode2.nextNode = currentNode1;
            currentNode1.nextNode = temp;
            return;
        }

        // Her sjekker jeg om prev2 noden er null for da er den funnet men den er head i lista
        if(!previousNode2) {
            this.head = currentNode1;

            let temp = currentNode1.nextNode; 
            currentNode1.nextNode = currentNode2.nextNode

            previousNode1.nextNode = currentNode2;
            currentNode2.nextNode = temp;
            return;
        }

        let temp = currentNode1.nextNode;
        currentNode1.nextNode = currentNode2.nextNode;
        previousNode2.nextNode = currentNode1;

        previousNode1.nextNode = currentNode2;
        currentNode2.nextNode = temp;
    }

    findNode(data) {
        if (!this.head) return; // empty list nothing to iterate over

        let currentNode = this.head;

        while (currentNode && currentNode.data !== data) {
            currentNode = currentNode.nextNode;
        }

        if(!currentNode) {
            console.log("Node not found!");
            return null;
        }

        return currentNode;
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

liste1.addFirst(500);
liste1.addFirst(400);
liste1.addFirst(300);
liste1.addFirst(200);
liste1.addFirst(100);


const node1 = liste1.findNode(200);
const node2 = liste1.findNode(400);
console.log(node1, node2);
liste1.printList();

liste1.swapNodes(node1, node2);

console.log("Etter swap: ")
liste1.printList();