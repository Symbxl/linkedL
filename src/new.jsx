export const HashTable = (items: A) => {
  let obj = {};
  for (let i = 0; i < items.length; i++) {
    if (!obj[items[i]]) {
      obj[items[i]] = 1;
    } else {
      obj[items[i]]++;
    }
  }
  return obj;
};


export const NameIDLookup = (items: A) => {
    let obj = {}
    for (let item in items) {
      obj[items[item].name] = items[item].id
    }
    return obj;
  }


  const LinkedList = (items: A) => {
    let obj = {}

  }




  class SimpleLinkedList {
    constructor(head = null) {
        this.head = head
    }

    // length of linked List 
    size() {
      let count = 0; 
      let node = this.head;
      while (node) {
          count++;
          node = node.next
      }
      return count;
    }

   // clear list item
    clear() {
      this.head = null;
    }

   // get head or 'first' list item
    getFirst() {
      return this.head;
  }

     // get tail or 'last' list item
  getLast() {
    let lastNode = this.head;
    if (lastNode) {
        while (lastNode.next) {
            lastNode = lastNode.next
        }
      }
      return lastNode
    }
  }

  class ListNode {
    constructor(data) {
        this.data = data
        this.next = null                
    }
  }

  let node1 = new ListNode(20)
  let node2 = new ListNode(100)
  let node3 = new ListNode(999)
  node1.next = node2
  node2.next = node3

  export const linked = new SimpleLinkedList(node1)
