// ********************************Function vs Arrow Function******************* */
// function declaration
function square(num){
    return num*num;
}

// function expression
var square = function (num){
    return num*num;
}

// arrow function
var square =  (num) =>{
    return num*num;
}

//Return keyword is implicit in arrow function
var square =  (num) => num*num ; 

sum(1,2); // Invokes the regular function, as it's made available in the global scope in the memory allocation phase.

// Can't access arguments in arrow function   
var sum = (num1, num2) =>{
    console.log("Arrow Function");
    console.log(arguments);  // Uncaught reference error: 
     num1 + num2;
 }
 function sum(num1, num2) {
    console.log("Regular Function");
    console.log(arguments);  // ARguments array
    return num1 + num2;
}

sum(1,2); // Invokes the arrow function as in the execution phase, arrow function overrides the regular function

// 'this' keyword has different context in arrow function than regular function.
var user={
    username: "John",
    age: 25,
    city: "New York",
    print:function(){
        console.log(`${this.username} _ ${this.age} _ ${this.city}`);  // John  :In Regular function, 'this' refers to contatining object 
    },
    printArrow:()=>{
        console.log(`${this.username} _ ${this.age} _ ${this.city}`);  // Undefined : In Arrow Function, 'this' refers to the global object
    }
}
user.print();
user.printArrow();