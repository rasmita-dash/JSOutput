// ***********************************Function currying****************** */
function add(a){
    console.log("a: ", a);
    return function (b){
        console.log("b: ", b);
        if(b) return add (a+b)
        return a;
    }
}
console.log(add(4)(5)())
console.log(add(4)(5)(6)(7)(8)(9)(10)());


//****************Function Currying************ */
function multiply(x,y){
    console.log(x*y);
}
let multiplyByTwo = multiply.bind(this,2); // x is 2
let multiplyByThree = multiply.bind(this,3); // x is 3
multiplyByTwo(10);
multiplyByThree(10);

let custom1=multiply.bind(this,4,7);
custom1();

let custom2=multiply.bind(this);
custom2(6,7)

let sum = function(x){
    return function (y){
        console.log(x+y)
    }
}

let sum4 = sum(4);
sum4(8);

let sum3=sum(3);
sum3(8);