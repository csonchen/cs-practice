function fun1(numbers, target) {
  if (numbers == null) return null

  let i = 0, j = numbers.length - 1

  while(i < j) {
    let sum = numbers[i] + numbers[j]
    if (sum == target) {
      return [i, j]
    } else if (sum > target) {
      j--
    } else {
      i++
    }
  }
  return null
}

function fun2(target) {
  if (target < 0) return false

  let i = 0, j = Math.sqrt(target)

  while (i <= j) {
    let sum = i * i + j * j
    if (sum == target) {
      return true
    } else if (sum > target) {
      j--
    } else {
      i++
    }
  }
  return false
}

function fun3(s) {
  if (s == null) return null

  let map = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  let i = 0, j = s.length - 1
  let result = Array(s.length).fill('')

  while(i <= j) {
    let ci = s.charAt(i)
    let cj = s.charAt(j)
    if (map.indexOf(ci) === -1) {
      result[i++] = ci
    } else if (map.indexOf(cj) === -1) {
      result[j--] = cj
    } else {
      result[i++] = cj
      result[j--] = ci
    }
  }
  return result.join('')
} 

function fun4(s) {
  let i = 0, j = s.length - 1
  for (; i < j; i++, j--) {
    if (s.charAt(i) !== s.charAt(j)) {
      return isValid(s, i+1, j) || isValid(s, i, j-1)
    }
  }
  return true
}

function isValid(s, i, j) {
  while(i < j) {
    if (s.charAt(i++) !== s.charAt(j--)) {
      return false
    }
  }
  return true
}

function fun5(nums1, m, nums2, n) {
  let index1 = m - 1
  let index2 = n - 1
  let indexm = m + n - 1

  while (index1 >= 0 || index2 >= 0) {
    if (index1 < 0) {
      nums1[indexm--] = nums[index2--]
    } else if (index2 < 0) {
      nums1[indexm--] = nums[index1--]
    } else if (nums1[index1] > nums2[index2]) {
      nums1[indexm--] = nums[index1--]
    } else {
      nums1[indexm--] = nums[index2--]
    }
  }
}

function fun6(head) {
  if (head == null) return false

  let l1 = head
  let l2 = head.next

  while(l1 != null && l2 != null && l2.next != null) {
    if (l1 == l2) {
      return true
    }
    l1 = l1.next
    l2 = l2.next.next
  }
  return false
}

function isSubString(s, target) {
  let i = 0
  let j = 0
  while(i < s.length && j < target.length) {
    if (s.charAt(i) === target.charAt(i)) {
      j++
    }
    i++
  }
  return j === target.length
}

function fun7(s, d) {
  let word = ''
  for (let i = 0, len = d.length; i < len; i++) {
    let l1 = word.length
    let l2 = d[i].length

    if (l1 > l2 || l1 == l2 && l1 < l2) {
      continue
    }

    if (isSubString(s, d[i])) {
      word = d[i]
    }
  }
  return word
}