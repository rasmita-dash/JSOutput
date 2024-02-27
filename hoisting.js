//************ */
//let & const are block scoped.
//var is function scoped
//var (declared in the outer scope) can be shadowed by let & const (declared in the inner scope block/function)
//**************************** */
/**************************** */
var q= 10;
let r=20;
const s= 30;
{
    var q= 1;
    let r=2;
    const s=3;
    console.log(q); //1
    console.log(r); //2 
    console.log(s); //3 
}
console.log(q); //1
console.log(r); //20
console.log(s); //30
function X(){
    var q= 100;
    let r=200;
    const s=300;    
    console.log(q); //100
    console.log(r); //200 
    console.log(s); //300 
}
X();
console.log(q); //1
console.log(r); //20 
console.log(s); //30 

//**************************** */
const a= 10;
{
    const a= 1;
    console.log(a); 

}
console.log(a);

//1
//10

// const b= 10;
// {
//     b= 1;
//     console.log(b); 

// }
// console.log(b);

// //Uncaught TypeError: Assignment to constant variable. for b=1
//****************************** */

var c= 10;
{
    const c= 1;
    console.log(c); //1

}
console.log(c); //10

//1
//10

const d= 10;
{
    let d= 1;
    console.log(d); 

}
console.log(d); 

//1
//10

let e= 10;
{
    const e= 1;
    console.log(e); 

}
console.log(e); 

//1
//10

// const f= 10;
// {
//     var f= 1; 
//     console.log(f);

// }
// console.log(f); 
// // Uncaught SyntaxError: Identifier 'a' has already been declared
// //illegal shadowing : const & let can't be shadowed by var.

var g= 10;
{
    var g= 1;
    console.log(g); 

}
console.log(g); 
//1
//1

var h= 10;
{
    let h= 1;
    console.log(h); 

}
console.log(h); 

//1
//10

// let a= 10;
// {
//     var a= 1; 
//     console.log(a);

// }
// console.log(a); 

// // Uncaught SyntaxError: Identifier 'a' has already been declared
// // let & onst in the outer scope can't shadowed by a variable in the inner scope

var i= 10;
function X(){
    var i= 1;
    console.log(i); 
}
X()
console.log(i); 
//1
//10 since var is function scoped. result would have been diffrent for block.

var j= 10;
{
    var j= 1;
    console.log(j); 
}
X()
console.log(j); 
//1
//1

var k= 10;
function Y(){
    let k= 1;
    console.log(k); 
}
Y()
console.log(k); 
//1
//10

let l= 10;
function Z(){
    var l= 1; 
    console.log(l); 
}
Z()
console.log(l); 
//1
//10

let m= 10;
function A(){
    m= 1; // m is not locally scoped within A(), since it's not declared here 
    console.log(m); 
}
A()
console.log(m);

//1
//1   //updated m in the parent scope

let n=100;
{
    let n= 10;
    function A(){
        n= 1; // n is not locally scoped within A(), since it's not declared here 
        console.log(n); 
    }
    A()
    console.log(n);
}
console.log(n);

//1
//1   // 'n' is not locally scoped, so overrides value in the parent scope(within the block)
//100

let p=100;
{
    p= 10;
    function A(){
        p= 1; // n is not locally scoped within A(), since it's not declared here 
        console.log(p); 
    }
    A()
    console.log(p);
}
console.log(p);

//1
//1
//1

var o=100;
{
    var o= 10;
    function A(){
        o= 1; // n is not locally scoped within A(), since it's not declared here 
        console.log(o); 
    }
    A()
    console.log(o);
}
console.log(o);

//1
//1
//1

//**************************************/
{
    var t= 1;
    let u=2;
    const v=3;
    console.log(t); //1
    console.log(u);  //2
    console.log(v);  //3
}
console.log(t); //1
// console.log(u); // Uncaught ReferenceError:b is not defined
// console.log(v); // Uncaught ReferenceError:c is not defined

//*************************** */
var w =5;
let x=1;
function X(){
    var w=50;
    let x=10; 
    console.log(w);
    console.log(x);
}
X();
console.log(w);
console.log(x);
//50
//10
//5
//1
//****************************************** */
var y =5;
var y=50;
let z=1;
//let z=10; //Uncaught SyntaxError: Identifier 'b' has already been declared

/*********************** */
console.log(aa); 
//console.log(ab); //Uncaught ReferenceError: Cannot access 'b' before initialization
var aa=10;
let ab=20;
console.log(ab);//20
// console.log(ac); //Uncaught ReferenceError: ac is not defined

//undefined
//Uncaught ReferenceError: Cannot access 'b' before initialization
//20
//Uncaught ReferenceError: ac is not defined
//****************************************** */

var af= 1;
ad();
ae();
console.log(x);
function ad(){
    var af= 10;
    console.log(af);
}
function ae(){
    var af= 100;
    console.log(af);
}
//10
//100
//1

//********************************************* */
// console.log(x); //Undefined
// // console.log(y); //Uncaught ReferenceError: y is not defined
// Hello(); 
// var x=5;
// console.log(y); //Uncaught ReferenceError: y is not defined
// function Hello(){
//     var y=3;
//     console.log("Hello World!")
// }
// console.log(x); //5

// console.log(ag); //Uncaught ReferenceError: Cannot access 'ag' before initialization
Hello(); 
let ag=5;
function Hello(){
    console.log("Hello World!")
}
console.log(ag); 

//************************************************** */
// setTimeout(function(){
//     console.log("Within setTimeout");
// },2000);
// console.log("Hello World!");
// //Hello World!
// //Within setTimeout

// for(var i=0; i<5; i++){
//     setTimeout(function(){
//         console.log(i);
//     },2000);
// }
// console.log("Hello World!");
// //Hello World!
// // 5 5 5 5 5

//For desired output, use let or create a closure with each value of i

// for(let i=0; i<5; i++){
//     setTimeout(function(){
//         console.log(i);
//     },2000);
// }
// console.log("Hello World!");
// //Hello World!
// // 0 1 2 3 4 

// for(var i=0; i<5; i++){
//     function Close(x){
//         setTimeout(function(){
//             console.log(x);
//         },2000);
//     }
//     Close(i);
// }
// console.log("Hello World!");
// //Hello World!
// // 0 1 2 3 4 

// with IIFE
// for(var i=0; i<5; i++){
//     (function (x){
//         setTimeout(function(){
//             console.log(x);
//         },2000);
//     })(i);
// }

