var a={
    b:10,
    calculate:function(x){
        console.log(this.b+this.d+x)
    }
}

var c={
d:15,
__proto__:a
}

console.log(c.b)
console.log(c.d)
console.log(c.calculate(232))
// apply is used when we have the array 
// Output 
//10
//15
//257