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









// var n=2;
// function square(num){
//     var ans= num* num;
//     return ans;
// }
// var square2= square(n);
// var square4=square(4);