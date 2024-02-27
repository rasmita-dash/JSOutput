let count=0;
(function(){
    {
        //console.log(`Block1: ${count}`); //Uncaught ReferenceError: Cannot access 'count' before initialization
        let count=1; // Shadowing
        console.log(`Block2: ${count}`); // 1
    }
    console.log(`Global: ${count}`); //0
})()


// let count=0;
// (function(){
//     {
//         console.log(`${count}`); //0
//         count=1; // Shadowing
//         console.log(`${count}`); // 1
//     }
//     console.log(`${count}`); //1  //although count was shadowed within the inner block scope, the reassignment persists in the outer scope as well due to the absence of a new variable declaration.
// })()

// //********addSix(10) should return 16************* */
// var addSix = createBase(6);
// console.log(addSix(10));//16
// console.log(addSix(20)); // 26

function createBase(base) {
    return function(num){
        return base+num;
    }
}

//***********************************Closure for perfomance improvement******************* */
// function getSquare(num){
//     var arr=[];
//     for(let i=0;i<=100000;i++){
//         arr.push(i*i);
//     }
//     console.log(arr[num]);
// }
// console.time("6");
// getSquare(6);
// console.timeEnd("6");

// console.time("12");
// getSquare(12);
// console.timeEnd("12");

// function getSquareWithClosure(){
//     var arr=[];
//     for(let i=0;i<=100000;i++){
//         arr.push(i*i);
//     }
//     return function(num){
//         console.log(arr[num]);
//     }
// }
// const closureSquare=getSquareWithClosure();
// console.time("4");
// closureSquare(4);
// console.timeEnd("4");

// console.time("10");
// closureSquare(10);
// console.timeEnd("10");


//**********************************Hoisting & Execution Context*************** */
// for(let i = 0; i <5; i++) {
//     setTimeout(()=>console.log(i));
// }
// for(var i = 0; i <5; i++) {
//    //Closure
//     (function(a) {
//     setTimeout(()=>console.log(a));})(i);
// }