export function done() {
  return false
}
exports.done = false
import * as b from './b.js'
console.log('a.js中, b.done = %j', b.done)
console.log('a.js done.')