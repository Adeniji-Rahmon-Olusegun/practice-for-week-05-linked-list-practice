class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }


  addToHead(val) {

    const newNode = new DoublyLinkedListNode(val);

    newNode.next = this.head;

    if (this.head === null) {
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
    }

    this.head = newNode;
    
    this.length++;
  }

  addToTail(val) {
    
    const newNode = new DoublyLinkedListNode(val);

    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
    }

    this.tail = newNode;

    this.length++;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

const ll = new DoublyLinkedList();

ll.addToHead(34);
ll.addToHead(12);
ll.addToHead(0);
ll.addToHead(7);

ll.print();

console.log("____________________");

ll.addToTail(90);
ll.addToTail(20);
ll.addToTail(100);

ll.print()

console.log("_____________________");


console.log(ll.length);
console.log(ll.tail.value)


module.exports = DoublyLinkedList;