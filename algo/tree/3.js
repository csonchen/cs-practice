function isLeaf(root) {
  if (root == null) return false

  return root.left === null && root.right === null
}

function fun1(root) {
  if (root == null) return 0

  if (isLeaf(root.left)) return root.left.val + fun1(root.right)

  return fun1(root.left) + fun1(root.right)
}

let path = 0
function fun2(root) {
  dfs(root)
  return path
}

function dfs(root) {
  if (root == null) return 0
  let left = dfs(root.left)
  let right = dfs(root.right)

  let leftPath = root.left != null && root.left.val == root.val ? left + 1 : 0
  let rightPath =root.right != null && root.right.val == root.val ? right + 1 : 0
  path = Math.max(path, leftPath + rightPath)
  return Math.max(leftPath, rightPath)
}

function rob(root) {
  if (root == null) return 0
  let val1 = root.val
  if (root.left !== null) val1 += rob(root.left.left) + rob(root.left.right)
  if (root.right !== null) val2 += rob(root.right.left) + rob(root.right.right)
  let val2 = rob(root.left) + rob(root.right)
  return Math.max(val1, val2)
}

