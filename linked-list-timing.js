const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

const lls = new LinkedList();

const llsHeadStart = Date.now();
lls.addToHead(3);
lls.addToHead(3);
lls.addToHead(3);
lls.addToHead(3);
lls.addToHead(3);
lls.addToHead(3);
lls.addToHead(3);
lls.addToHead(3);
lls.addToHead(3);
lls.addToHead(3);
lls.addToHead(3);
lls.addToHead(3);
lls.addToHead(3);
lls.addToHead(3);
lls.addToHead(3);
lls.addToHead(3);
lls.addToHead(3);
lls.addToHead(3);
lls.addToHead(3);
lls.addToHead(3);
lls.addToHead(3);
lls.addToHead(3);
lls.addToHead(3);
lls.addToHead(3);
lls.addToHead(3);

const llsHeadEnd = Date.now();

console.log(`Time it takes for addToHead: ${llsHeadEnd - llsHeadStart}`);

console.log("-----------------------");

const llsTailStart = Date.now();
lls.addToTail(3);
lls.addToTail(3);
lls.addToTail(3);
lls.addToTail(3);
lls.addToTail(3);
lls.addToTail(3);
lls.addToTail(3);
lls.addToTail(3);
lls.addToTail(3);
lls.addToTail(3);
lls.addToTail(3);
lls.addToTail(3);
lls.addToTail(3);
lls.addToTail(3);
lls.addToTail(3);
lls.addToTail(3);
lls.addToTail(3);
lls.addToTail(3);
lls.addToTail(3);
lls.addToTail(3);
lls.addToTail(3);
lls.addToTail(3);
lls.addToTail(3);
lls.addToTail(3);
lls.addToTail(3);
lls.addToTail(3);
lls.addToTail(3);
lls.addToTail(3);
lls.addToTail(3);
lls.addToTail(3);
lls.addToTail(3);
lls.addToTail(3);
lls.addToTail(3);


const llsTailEnd = Date.now();

console.log(`Time it takes for addToTail: ${llsTailEnd - llsTailStart}`);

console.log("===========================================");

const lld = new LinkedList();

const lldHeadStart = Date.now();

lld.addToHead(3);
lld.addToHead(3);
lld.addToHead(3);
lld.addToHead(3);
lld.addToHead(3);
lld.addToHead(3);
lld.addToHead(3);
lld.addToHead(3);
lld.addToHead(3);
lld.addToHead(3);
lld.addToHead(3);
lld.addToHead(3);
lld.addToHead(3);
lld.addToHead(3);
lld.addToHead(3);
lld.addToHead(3);
lld.addToHead(3);
lld.addToHead(3);
lld.addToHead(3);
lld.addToHead(3);
lld.addToHead(3);
lld.addToHead(3);
lld.addToHead(3);
lld.addToHead(3);
lld.addToHead(3);
lld.addToHead(3);
lld.addToHead(3);
lld.addToHead(3);
lld.addToHead(3);
lld.addToHead(3);

const lldHeadEnd = Date.now();

console.log(`Time it takes for addToHead: ${lldHeadEnd - lldHeadStart}`);

console.log("-----------------------");

const lldTailStart = Date.now();

lld.addToTail(3);
lld.addToTail(3);
lld.addToTail(3);
lld.addToTail(3);
lld.addToTail(3);
lld.addToTail(3);
lld.addToTail(3);
lld.addToTail(3);
lld.addToTail(3);
lld.addToTail(3);
lld.addToTail(3);
lld.addToTail(3);
lld.addToTail(3);
lld.addToTail(3);
lld.addToTail(3);
lld.addToTail(3);
lld.addToTail(3);
lld.addToTail(3);
lld.addToTail(3);
lld.addToTail(3);
lld.addToTail(3);
lld.addToTail(3);
lld.addToTail(3);
lld.addToTail(3);
lld.addToTail(3);


const lldTailEnd = Date.now();

console.log(`Time it takes for addToTail: ${lldTailEnd - lldTailStart}`);


function timeAddToTailSingle() {

}
// Your code here