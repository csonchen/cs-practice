class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

const root = new Node('1')
const left = new Node('2')
const right = new Node('3')

const leftChild = new Node('4')
const rightChild = new Node('5')

root.left = left
root.right = right

root.left.left = leftChild
root.left.right = rightChild


function pre(node) {
  if (node == null) return null

  console.log(node.value)

  if (node.left) {
    pre(node.left)
  }
  if (node.right) {
    pre(node.right)
  }
}
// pre(root)

function mid(node) {
  if (node == null) return null

  mid(node.left)

  console.log(node.value)

  mid(node.right)
}

// mid(root)

function last(node) {
  if (node == null) return null

  last(node.left)
  last(node.right)
  console.log(node.value)
}

// last(root)

class BST {
  constructor () {
    this.root = null
    this.size = 0
  }

  empty() {
    return this.size === 0
  }

  getSize() {
    return this.size
  }

  addNode(v) {
    this.root = this._addChild(this.root, v)
  }

  pre(node) {
    if (node) {
      console.log(node.value)
      this.pre(node.left)
      this.pre(node.right)
    }
  }

  mid(node) {
    if (node) {
      this.mid(node.left)
      console.log(node.value)
      this.mid(node.right)
    }
  }

  last(node) {
    if (node) {
      this.last(node.left)
      this.last(node.right)
      console.log(node.value)
    }
  }

  breadthFind() {
    if (!this.root) return

    const queues = []
    queues.push(this.root)

    while(queues.length > 0) {
      const current = queues.shift()
      console.log(current.value)

      if (current.left) {
        queues.push(current.left)
      }
      if (current.right) {
        queues.push(current.right)
      }
    }
  }

  getMin() {
    return this._getMin(this.root).value
  }

  _getMin(node) {
    if (!node.left) return node

    return this._getMin(node.left)
  }

  getMax() {
    return this._getMax(this.root).value
  }

  _getMax(node) {
    if (!node.right) return node

    return this._getMax(node.right)
  }

  _addChild(node, v) {
    if (!node) {
      this.size++
      return new Node(v)
    }

    if (v < node.value) {
      node.left = this._addChild(node.left, v)
    } else if (v > node.value) {
      node.right = this._addChild(node.right, v)
    }
    return node
  }
}

const bst = new BST()
bst.addNode(5)
bst.addNode(2)
bst.addNode(6)
bst.addNode(1)
bst.addNode(4)
bst.addNode(3)
bst.addNode(7)
// console.log(bst)

// bst.pre(bst.root)
// bst.mid(bst.root)
// bst.last(bst.root)
// bst.breadthFind()
console.log(bst.getMax())
console.log(bst.getMin())
