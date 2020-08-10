function fun1(nums, key) {
  let l = 0, h = nums.length - 1

  while (l <= h) {
    let m = l + (h - l) / 2
    if (nums[m] == key) {
      return m
    } else if (nums[m] > key) {
      h = m - 1
    } else {
      l = m + 1
    }
  }
  return -1
}

function fun2(nums, key) {
  let l = 0, h = nums.length - 1

  while(l < h) {
    let m = l + (h - l) / 2
    if (nums[m] > key) {
      h = m
    } else {
      l = m + 1
    }
  }
  return l
}

function fun3(x) {
  if (x <= 1) {
    return x
  }
  let l = 0, h = x
  while(l <= h) {
    let mid = l + (h - l) / 2
    let sqrt = x / mid
    if (sqrt == mid) {
      return mid
    } else if (mid > sqrt) {
      h = mid - 1
    } else {
      l = mid + 1
    }
  }
  return h
}

function fun4(letters, target) {
  let n = letters.length
  let l = 0, h = n - 1

  while(l <= h) {
    let m = l + (h - l) / 2

    if (letters[m] <= target) {
      l = m + 1
    } else {
      h = m - 1
    }
  }
  return l < n ? letters[l] : letters[0]
}

function fun5(n) {
  let l = 0, h = n
  while (l < h) {
    let m = l + (h - l) / 2
    if (isBadVersion(m)) {
      h = m
    } else {
      l = m + 1
    }
  }
  return l
}