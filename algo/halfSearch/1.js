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