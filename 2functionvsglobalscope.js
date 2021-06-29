function test1(){
let x=5;
}
function test2(){
    console.log(x);
}

// test2(); //throws x as undefined as x is local to function test1
let x=5;
function test3(){
    x++;
    }
    function test4(){
        console.log(x);
    }
    // test3();
    // test4(); //outputs 6 as x is accessible from both function as it is global

//     HOISTING
//    JS COMPILER looks for every declaration with keyword var and brings it on the top.(only declaration)

console.log(b); //having value undefined
var b; 

// At a time with var keyword we can declare only one variable in a function with same variable name

// HOISTING WORKS WITH ONLY VAR KEYWORD , IT HAS NO EFFECT ON LET KEYWORD.EFFECT.
// LET KEYWORD USES BLOCK SCOPE AND WORKS AS EXPECTED


let a=10;
function dummy(){
    let a=2;
{
    let a=5;
    console.log("1----->",a);
}
console.log("2------>",a);
}
dummy();
console.log("3------->",a);


//1. WHAT IS HOISTING?
// It is a process happening behind the scenes ,its basically bringing all the declarations on the top.

//2. HOW DOES BLOCK SCOPE WORK ?
// It is nothing but the brackets ,an if condition ,for loop,while loop etc that is a block created
// which create seprate scope for declarations existing in that block.

//3. WHAT IS SCOPE OF A VARIABLE ?
//A scope is availability or visibility or lifetime of a variable