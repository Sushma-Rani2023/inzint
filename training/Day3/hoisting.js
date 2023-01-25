// Hoisting :interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.
// Hoisting for var 

console.log('first print',x)
function printing (x){
    console.log('second print ',x);
    return x;
}
var x=5;
console.log('third print',printing(x))
console.log('**************** AFTER VAR')

// Hoisting in case of let
console.log(y)
function print (y){
    console.log(y)
}
const y=6;
console.log(print(y))
console.log('**************** AFTER LET')

// Hoisting in case of const
console.log(z)
function print (z){
    console.log(z)
}
const z=7;
console.log(print(z))




