class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
    this.size = 1
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

  floor(v) {
    let node = this._floor(this.root, v)
    return node ? node.value : null
  }

  _floor(node, v) {
    if (!node) return null

    if (node.value == v) return node

    if (node.value > v) {
      return this._floor(node.left, v)
    }

    let right = this._floor(node.right, v)
    if (right) {
      return right
    }
    return node
  }

  _getSize(node) {
    return node ? node.size : 0
  }

  _addChild(node, v) {
    if (!node) {
      return new Node(v)
    }

    if (v < node.value) {
      node.size++
      node.left = this._addChild(node.left, v)
    } else if (v > node.value) {
      node.size++
      node.right = this._addChild(node.right, v)
    }
    return node
  }

  select(k) {
    let node = this._select(this.root, k)
    console.log(node)
    return node ? node.value : null
  }
  _select(node, k) {
    if (!node) return null
    // 先获取左子树下有几个节点
    let size = node.left ? node.left.size : 0
    // 判断 size 是否大于 k
    // 如果大于 k，代表所需要的节点在左节点
    if (size > k) return this._select(node.left, k)
    // 如果小于 k，代表所需要的节点在右节点
    // 注意这里需要重新计算 k，减去根节点除了右子树的节点数量
    if (size < k) return this._select(node.right, k - size - 1)
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
// console.log(bst.getMax())
// console.log(bst.getMin())
// console.log(bst.floor(4.3))

console.log(bst.select(5))
