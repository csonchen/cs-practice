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

function fun1(root, sum) {
  if (root == null) return false

  if (root.left == null && root.right == null && root.val === sum) return true

  return fun1(root.left, sum - root.val) || fun1(root.right, sum - root.val)
}

function pathSum(root, sum) {
  if (root == null) return 0

  let ret = pathSumStartWithRoot(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum)
  return ret
}

function pathSumStartWithRoot(root, sum) {
  if (root == null) return 0

  let ret = 0
  if (root.val == sum) ret++
  ret += pathSumStartWithRoot(root.left, sum - root.val) + pathSumStartWithRoot(root.right, sum - root.val)
  return ret
}

function isSubtree(s, t) {
  if (s == null) return false

  return isSubtreeWithRoot(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t)
}

function isSubtreeWithRoot(s, t) {
  if (t == null && s == null) return true

  if (t == null || s == null) return false

  if (t.val != s.val) return false

  return isSubtreeWithRoot(s.left, t.left) && isSubtreeWithRoot(s.right, t.right)
}

function isSymmetric(root) {
  if (root == null) return true
  return isSymmetric(root.left, root.right)
}

function isSymmetric(t1, t2) {
  if (t1 == null && t2 == null) return true

  if (t1 == null || t2 == null) return false

  if (t1.val != t2.val) return false

  return isSymmetric(t1.left, t2.right) && isSymmetric(t1.right, t2.left)
}

function minDepth(root) {
  if (root == null) return 0
  let left = minDepth(root.left)
  let right = minDepth(root.right)
  if (left == 0 || right == 0) return left + right + 1
  return Math.min(left, right) + 1
}