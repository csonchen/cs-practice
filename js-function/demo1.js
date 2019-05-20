var add = function (a, b) {return a + b};
var multiply = function (a, b) {return a * b};

var fa = 4;
var fb = 2;
var fc = 0;

var result = add(
  multiply(
    fb, 
    add(fa, fc)
  ),
  multiply(fa, fb)
)
console.log(result)

// 拆分
var result2 = multiply(fb, add(fa, fa))
console.log(result2)