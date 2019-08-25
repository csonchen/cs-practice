exports.done = false
import * as a from './a.js'
console.log('在 b.js 中, a.done = %j', a.done)
exports.done = true
console.log('b.js执行完毕')