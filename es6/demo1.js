let array = [3, 2, 1, 2, 3, 2, 0, 4]
let counts = []
for (let v of array) {
  counts[v] = (counts[v] || 0) + 1
}
console.log(counts)

let result = []
for (let i = 0; i < counts.length; i++) {
  let count = counts[i]
  while(count > 0) {
    result.push(i)
    count--
  }
}
console.log(result)

