//**********************Function borrowing************************ */
function userDetails(city, state){
    console.log(this.firstName + " " + this.lastName + " from " + city + ", " + state)
}
let user1={
    firstName:"Rasmita",
    lastName:"Dash"
}
let user2={
    firstName:"Nipun",
    lastName:"Bajaj"
}
let user3={
    firstName:"Meenakshi",
    lastName:"Joshi"
}
userDetails.call(user1, "Bangalore", "Karnataka");
userDetails.apply(user2, ["New Delhi", "Uttar Pradesh"]);
let user3Details = userDetails.bind(user3, "Delhi", "Delhi");
user3Details();
//*****************Debouncing************* */
let counter =0;

getData = () =>{
    console.log("Calling API: " + counter ++)
}
//******************Local Storage***************** */
// var user={
//     "Name":"Rasmita",
//     "DOB":"10th Oct 1991"
// }
// localStorage.setItem("name", "Rasmita");
// localStorage.setItem("user", JSON.stringify(user));

// localStorage.getItem("name");
// JSON.parse(localStorage.getItem("user"));

// // localStorage.removeItem("name");
// // localStorage.clear();

//****************Function Currying************ */
// function multiply(x,y){
//     console.log(x*y);
// }
// let multiplyByTwo = multiply.bind(this,2); // x is 2
// let multiplyByThree = multiply.bind(this,3); // x is 3
// multiplyByTwo(10);
// multiplyByThree(10);

// let custom1=multiply.bind(this,4,7);
// custom1();

// let custom2=multiply.bind(this);
// custom2(6,7)

// let sum = function(x){
//     return function (y){
//         console.log(x+y)
//     }
// }

// let sum4 = sum(4);
// sum4(8);

// let sum3=sum(3);
// sum3(8);

//*******************Promise*********************** */
// // let cart=["pen", "cap","toy","glass"];
// let cart=[];

// createOrder(cart).then(data =>console.log(data))
// .catch(err=> console.log(err.message));

// function createOrder(cart){
//     const pr = new Promise(function(resolve, reject){
//         if(cart.length ==0){
//             const err=new Error("your cart is empty");
//             reject(err);
//         }else{
//             let orderId= 123
//             resolve(orderId);
//         }
//     });
//     return pr;
// }

// const pr = new Promise(function (resolve, reject){
//     if(invalid){
//         const err=new Error("incorrect request");
//         reject(err);
//     }else{
//         var response={}
//         resolve(response)
//     }
// });

// var API = "https://fakestoreapi.com/products";

// var promise=fetch(API);
// console.log(promise);

//************************map, filter, reduce*************************************** */
// var list=[
//     {    firstname:"Satya", lastname:"Dash", age:37},
//     {    firstname:"Sasmita", lastname:"Dash", age:36},
//     {    firstname:"Rasmita", lastname:"Dash", age:32},
//     {    firstname:"Surya", lastname:"Dash", age:28},
//     {    firstname:"Sandeep", lastname:"Patro", age:44},
//     {    firstname:"Subhalaxmi", lastname:"Palo", age:28},
//     {    firstname:"Debasish", lastname:"Misra", age:33},
//     {    firstname:"Subhadarshini", lastname:"Mohapatro", age:25}
// ];
// list.map(user=> user.fullName= user.firstname + " "+ user.lastname);
// console.log(list);

// var list_35=list.filter(user=> user.age > 35);
// console.log(list_35);

// // var totalAge = list.reduce(function(cum, curr){
// //     cum= cum+curr.age;
// //     return cum;
// // }, 0);

// var totalAge = list.reduce((cum, user, index) => {
//     cum= cum+user.age;
//     return cum;
// }, 0);

// console.log(totalAge);

//*************************Callback************************** */
// function calculate(radius, calculateFun){
//     return calculateFun(radius);
// }
// function Area(r){
//     return Math.PI *r*r;
// }
// function Circrumference(r){
//     return 2*Math.PI *r;
// }
// function Diameter(r){
//     return 2*r;
// }
// console.log (calculate(5,Diameter));
// console.log (calculate(5,Circrumference));
// console.log (calculate(5,Area));

//********************setTimeout ************ */
// Date.prototype.timeNow = function () {
//     return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
// }
// console.log("Start: ", new Date().timeNow());
// setTimeout(function(){
//     console.log("callback: ", new Date().timeNow())
// }, 0); 

// // Long running code block
// const endTime = new Date(new Date().getTime() + 1000 * 10);
// while(new Date()< endTime){
// }

// console.log("End: ", new Date().timeNow());

//************************Higher Order function /callback***************** */
// function y(arg1){
//     console.log("y");
//     arg1();
// }

// function x(){
//     console.log("x")
// }
// y(x);  //y is higher order function. x is first order function/ callback

// var a = function xyz(){
//     console.log("Named function expression");
//     xyz(); // The named function can only be accessible within the function like recursion
// }
// a(); //Named function expression
// xyz(); //Uncaught ReferenceError: xyz is not defined

// function(){ //Uncaught SyntaxError: Function statements require a function name
//     console.log("Anonymous Function")
// }


// A(); //Function Statement or Function Declaration
// B(); //Uncaught TypeError: B is not a function

// function A(){
//     console.log("Function Statement or Function Declaration")
// }

// var B = function(){
//     console.log("Function Expression")
// }
// B(); //Function Expression
//************************************ */
// function UpdateCounter(){
//     var counter= 0; var test="";
//     this.incrementCounter = function (){
//         counter++;
//         console.log(counter);
//     }

//     this.decrementCounter = function (){
//         counter--;
//         console.log(counter);
//     }
// }
// var counter1 =new UpdateCounter(); // Constructor function
// counter1.incrementCounter(); counter1.incrementCounter(); counter1.decrementCounter(); // 1  2   1

// var counter2 =new UpdateCounter(); // WIll have a different instance 
// counter2.decrementCounter(); counter2.incrementCounter(); // -1   0

// counter1.incrementCounter(); // 2
// counter2.incrementCounter();//1

//******************************* */
// function UpdateCounter(){
//     var counter= 0;
//     return function incrementCounter(){
//         counter++;
//         console.log(counter);
//     }
// }
// var counter1 =UpdateCounter();
// counter1(); counter1(); counter1(); // 1  2   3


// var counter2 =UpdateCounter(); // WIll have a different instance 
// counter2(); counter2(); // 1   2

// counter1(); // 4
// counter2();//3

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

//******************************************** */
// {
//     var x= 5;
//     function B(){
//         console.log(x);
//     }
//     x=20;
// }
// B(); // 20
// var x=50;
// B(); //50

//******************************************* */
// function A(){
//     var x= 5;
//     function B(){
//         console.log(x);
//     }
//     x=20;
//     return B;  
// }
// var c= A();
// var x=50;
// c(); //20

// function A(){
//     var x= 5;
//     function B(){
//         console.log(x);
//     }
//     return B;  // Clolsure: Function along with it's Lexical scope
// }
// var c= A();
// var x=50;
// c(); //5

//**************************************************** */
// function A(){
//     console.log("I am defined globally");
// }
// {
//     function A(){
//         console.log("I am defined in block");
//     }
//     function AA(){
//         function AAA(){
//             console.log("Another function defined in a function within block");
//         }
//         console.log("Another function defined in block");
//     }
//     AA();
// }
// A();
// function B(){

//     function A(){
//         console.log("I am defined in B()");
//     }
//     A();
//     function D(){
//         console.log("Another function defined in function");
//     }
// }
// B();
// A();
// B();
// const a= 10;
// {
//     const a= 1;
//     console.log(a); //1

// }
// console.log(a); //10

// var a= 10;
// {
//     const a= 1;
//     console.log(a); //1

// }
// console.log(a); //10

// const a= 10;
// {
//     let a= 1;
//     console.log(a); //1

// }
// console.log(a); //10

// let a= 10;
// {
//     const a= 1;
//     console.log(a); //1

// }
// console.log(a); //10

// const a= 10;
// {
//     var a= 1; // Uncaught SyntaxError: Identifier 'a' has already been declared
//     console.log(a);

// }
// console.log(a); 

// var a= 10;
// {
//     var a= 1;
//     console.log(a); //1

// }
// console.log(a); //1

// var a= 10;
// {
//     let a= 1;
//     console.log(a); //1

// }
// console.log(a); //10

// let a= 10;
// {
//     var a= 1; // Uncaught SyntaxError: Identifier 'a' has already been declared
//     console.log(a);

// }
// console.log(a); 

// var a= 10;
// function X(){
//     var a= 1;
//     console.log(a); //1

// }
// X()
// console.log(a); //10

// var a= 10;
// function Y(){
//     let a= 1;
//     console.log(a); //1

// }
// Y()
// console.log(a); //10

// let a= 10;
// function Z(){
//     var a= 1; 
//     console.log(a); //1
// }
// Z()
// console.log(a); //10


/**************************** */
// var a= 10;
// let b=20;
// const c= 30;
// {
//     var a= 1;
//     let b=2;
//     const c=3;
//     console.log(a); //1
//     console.log(b);  //2
//     console.log(c);  //3
// }
//************************* */

// var a= 10;
// let b=20;
// const c= 30;
// function X(){
//     var a= 1;
//     let b=2;
//     const c=3;
//     console.log(a); //1
//     console.log(b);  //2
//     console.log(c);  //3
// }
// X();
// console.log(a); //10
// console.log(b); // 20
// console.log(c); // 30
//*************************************8 */

// var a= 10;
// let b=20;
// const c= 30;
// {
//     var a= 1;
//     let b=2;
//     const c=3;
//     console.log(a); //1
//     console.log(b);  //2
//     console.log(c);  //3
// }
// console.log(a); //1
// console.log(b); // 20
// console.log(c); // 30

//******************************* */
// {
//     var a= 1;
//     let b=2;
//     const c=3;
//     console.log(a); //1
//     console.log(b);  //2
//     console.log(c);  //3
// }
// console.log(a); //1
// console.log(b); // Uncaught ReferenceError:b is not defined
// console.log(c); // Uncaught ReferenceError:c is not defined

//*************************** */
// var a =5;
// let b=1;
// function X(){
//     var a=50;
//     let b=10; //Uncaught SyntaxError: Identifier 'b' has already been declared
//     console.log(a);
// console.log(b);
// }
// X();
// console.log(a);
// console.log(b);

//****************************************** */
// var a =5;
// var a=50;
// let b=1;
// let b=10; //Uncaught SyntaxError: Identifier 'b' has already been declared

/*********************** */
// console.log(a); //10
// console.log(b); //Uncaught ReferenceError: Cannot access 'b' before initialization
// var a=10;
// let b=20;
// console.log(b);//20
// console.log(c); //Uncaught ReferenceError: c is not defined
//****************************************** */

// var x= 1;
// a();
// b();
// console.log(x);
// function a(){
//     var x= 10;
//     console.log(x);
// }
// function b(){
//     var x= 100;
//     console.log(x);
// }
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

// console.log(x); //Uncaught ReferenceError: Cannot access 'x' before initialization
// Hello(); 
// let x=5;
// function Hello(){
//     console.log("Hello World!")
// }
// console.log(x); 




// var n=2;
// function square(num){
//     var ans= num* num;
//     return ans;
// }
// var square2= square(n);
// var square4=square(4);