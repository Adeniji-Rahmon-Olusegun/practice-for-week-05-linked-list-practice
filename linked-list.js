class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {

  constructor() {

    this.head = null;
    this.length = 0;

  }

  addToHead(val) {
    
    let newNode = new LinkedListNode(val);

    newNode.next = this.head;

    this.head = newNode;

    this.length++;
  }

  addToTail(val) {

    let temp = this.head;

    let newNode = new LinkedListNode(val)
    
    if (this.head === null) {
      this.head = newNode
    } else {

      while (temp.next) {
        temp = temp.next;
      }

      temp.next = newNode;
    }

    this.length++;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

const ll = new LinkedList();

ll.addToTail(6);
ll.addToTail(1);
ll.addToTail(12);
ll.addToTail(89)

ll.print();

console.log('----------------------');

ll.addToHead(82);

ll.print();

console.log(ll.length);


module.exports = LinkedList;