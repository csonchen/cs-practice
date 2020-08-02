function maxDepth(root) {
  if (!root) return 0

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}

let result = true

function maxDepth2(root) {
  if (root == null) return 0

  let l = maxDepth2(root.left)
  let r = maxDepth2(root.right)
  if (Math.abs(l - r) > 1) result = false

  return 1 + Math.max(l, r)
}

function isBalanced(root) {
  maxDepth2(root)
  return result
}

let max = 0

function max(root) {
  depth(root)
  return max
}

function depth(root) {
  if (root == null) return 0

  let l = depth(root.left)
  let r = depth(root.right)
  max = Math.max(max, l + r)
  return Math.max(l, r) + 1
}

function invertTree(root) {
  if (root == null) return null

  let left = root.left
  root.left = invertTree(root.right)
  root.right = invertTree(left)
  return root
}

function mergeTree(root1, root2) {
  if (root1 == null && root2 == null) return null

  if (root1 == null) return root2
  if (root2 == null) return root1

  let root = new TreeNode(root1.value + root2.value)
  root.left = mergeTree(root1.left, root2.right)
  root.right = mergeTree(root1.right, root2.right)
  return root
}