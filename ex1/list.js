class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head;
    this.tail = head;
    this.size = 1;
  }

  size() {
    return this.size;
  }

  addStart(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
  }

  addAfter(target, value){
    let aux = this.head;
    while(aux.next){
      if(aux.value === target){
        const newNode = new Node(value);

        newNode.next = aux.next;
        aux.next = newNode;
      }

      aux = aux.next;
    }

  }

  addBefore(target, value){
    let aux = this.head;
    let tmp = aux;
    while(aux.next){
      if(aux.value === target){
        const newNode = new Node(value);

        tmp.next = newNode;
        newNode.next = aux;
      }
      tmp = aux;
      aux = aux.next;
    }
  }

  removeAfter(target){
    let aux = this.head;
    let tmp = aux.next;
    while(aux.next){
      if(aux.value === target){
         aux.next = tmp.next;
         tmp.next = null;

      }

      aux = aux.next;
      tmp = aux.next
    }
  }

  removeBefore(target){
    let aux = this.head;
    let tmp = aux;
    let n_aux = tmp;
    while(aux.next){
      if(aux.value === target){
         n_aux.next = aux; 
         tmp.next = null;

      }
      n_aux = tmp;
      tmp = aux;
      aux = aux.next;
    }
  }

  toString() {
    let str = ''
    let aux = this.head;

    str = aux.value + ' -> ';

    while (aux.next !== null) {
      aux = aux.next;
      str = str + aux.value + ' -> ';
    }
    console.log(str);
  }
}

const one = new Node(5);
const list = new LinkedList(one);

list.toString();
list.addStart(2);
list.toString();
list.addAfter(2,8);
list.toString();
list.addBefore(8,45);
list.addBefore(45, 9);
list.toString();
list.removeBefore(45);
list.toString();
