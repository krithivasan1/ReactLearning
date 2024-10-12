var a={},
b={key:"b"},
c={key:"c"};

a[b]=123;
a[c]=456;
console.log(a[b]);
console.log(a[c]);
// Both output as 456 
/*a[b] where b is object. so a[object] = 123.
a[c] where c is object. so a[object] = 456.*/

// reason 
console.log({}.toString());
// It will return object Object 
// in array format 
// object of Type Object 
// stringify the object 

// it is equivalent to 
// var a={},
// var b={key:"b"},
// var c ={key:"c"}

// Now 
/*
a[b] which is a[b.toString())]
which is a[object]
b is stringified 
a[object]=123
it is overwritted 
a[object]=456 
now if you print a[b] or a[c], then it is 456 
run the js with node x.js

*/
var c=[];
console.log(c.toString())
// Output: object Object 
c=[1,2]
console.log(c.toString())
// Output 1,2 
// object will be stringify - using toString() 
// javascript no compiler, runs on the run time 
// Function, variable at run time 
// Js inheritance is achieved through prototype
    
