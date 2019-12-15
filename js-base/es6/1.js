function* a() {
    yield 'hello'
    yield 'world'
    return 'ending'
}
var r = a()
console.log(r.next())
console.log(r.next())
console.log(r.next())
console.log(r.next())