# LinkedList Implementation in JavaScript

This project is a simple implementation of a singly linked list in JavaScript. It includes several key methods for manipulating the list, such as adding, removing, and swapping nodes.

## Functionality

- **addFirst(data)**: Adds a new node with the given data at the beginning of the list.
- **addLast(data)**: Adds a new node at the end of the list.
- **addAtIndex(data, index)**: Adds a new node at the specified index.
- **removeAtIndex(index)**: Removes the node at the specified index.
- **removeFirst()**: Removes the first node in the list.
- **removeLast()**: Removes the last node in the list.
- **swapNodes(node1, node2)**: Swaps two nodes in the list by reference.
- **findNode(data)**: Finds and returns a node with the specified data.
- **printList()**: Prints the entire list.

## Example Usage

Here is an example of how you can use the `LinkedList` class:

```javascript
import LinkedList from './LinkedList.mjs';

const list = new LinkedList();

list.addFirst(500);
list.addFirst(400);
list.addFirst(300);
list.addFirst(200);
list.addFirst(100);

const node1 = list.findNode(200);
const node2 = list.findNode(400);

console.log("Before swap:");
list.printList();

list.swapNodes(node1, node2);

console.log("After swap:");
list.printList();
