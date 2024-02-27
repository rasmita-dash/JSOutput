//************************Get Factorial*****************//
function getFactorial(num){
    return (num>1)? num * getFactorial(num-1) : num;
}

console.log(getFactorial(1));
