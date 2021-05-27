export class LinkedListNode {
  constructor(public value: any, public next: LinkedListNode | null = null) {}
}

export class LinkedList {
  constructor(public start: LinkedListNode | null = null) {}

  public addToTail = (value: any): void => {
    if (!this.start) {
      this.start = new LinkedListNode(value);
    } else {
      let currentNode = this.start;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = new LinkedListNode(value);
    }
  };

  public print(): void {
    let node: LinkedListNode | null = this.start;
    let i = 1;
    while (node !== null) {
      console.log(`Elemento ${i}: `, node.value);
      node = node.next;
      i++;
    }
  }
}

const labenuClasses: LinkedList = new LinkedList();

labenuClasses.addToTail("Epps");

labenuClasses.print();
