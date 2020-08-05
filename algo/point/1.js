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

