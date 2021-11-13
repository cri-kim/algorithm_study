const Node = (val) => {
  this.val = val;
  this.next = null;
};

const LinkedList = () => {
  this.head = new Node("head");
  this.find = find;
  this.append = append;
  this.insert = insert;
  this.remove = remove;
  this.findPrevious = findPrevious;
};

const find = (item) => {
  let currentNode = this.head;
  while (currentNode.val !== item) {
    currentNode = currentNode.next;
  }
  return currentNode;
};

const findPrevious = (item) => {
  let currentNode = this.head;
  while (currentNode.next && currentNode.next.val !== item) {
    currentNode = currentNode.next;
  }
  return currentNode;
};

const append = (newValue) => {
  const newNode = new Node(newValue);
  let current = this.head;
  while (current.next) {
    current = current.next;
  }
  current.next = newNode;
};

const insert = (newValue, item) => {
  let newNode = new Node(newValue);
  let current = this.find(item);

  newNode.next = current.next;
  current.next = newNode;
};

const remove = (item) => {
  let previousNode = this.findPrevious(item);
  previousNode.next = previousNode.next.next;
};
