var a={
    b:10,
    calculate:function(x){
        console.log(this.b+this.d+x)
    }
}

var c={
d:15,
b:20, // It will take the local value first, when we inherit the same value
__proto__:a // It will take the object as value assigned to it 
}

console.log(c.b) // If there is no b in c, it will print a . c value which is 10 
console.log(c.d) // 15 
console.log(c.calculate(232)) // 267 
// Look for proto in itself first and then look in to the inherited object 
// b.z - We will have the undefined 
console.log(a)


// Proto Chain 
var e ={
    d:20,
    __proto_:c
}
console.log(e);
// a -> c -> e 
// This is multi level inheritance 
console.log('e.b is ',e.d)
// 20 

// There should not be two proto in the same variable 

