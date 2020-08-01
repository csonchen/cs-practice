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

last(root)