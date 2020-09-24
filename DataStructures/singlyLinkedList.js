//Lists don't have indexes!
//They are connected via nodes with a NEXT pointer.
//Random access is not allowed.
//Linked Lists are great for optimizing insertion and deleting
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

//Create first Node
let first = new Node("Hi");

//How To Add Additional Nodes
first.next = new Node("#2");
first.next.next = new Node("#3");

//console.log(first);

//To not have to keep adding .next to add another node create the class SinglyLinkedList to add methods like push to make your code cleaner
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    // traverse() {
    //     let current = this.head;
    //     while (current) {
    //         console.log(current.val);
    //         current = current.next;
    //     }
    // }
    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift() {
        if (!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }   
        this.length++;
        return this;
    }
}

let list = new SinglyLinkedList();
list.push("Hello");
list.push("Goodbye");
list.push("!");
//Show the list
console.log(list);
// //Take off the last node and show it
// console.log(list.pop());
// //Show the updated list
// console.log(list);
// console.log(list.pop());
// console.log(list.pop());
// //All nodes have been popped off
// console.log(list);