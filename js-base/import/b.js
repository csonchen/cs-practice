exports.done = false
import * as a from './a.js'
console.log('b.js中， a.done = %j', a.done())
exports.done = true
console.log('b.js done')