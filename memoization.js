// //**********************Memoize or caching******************************//

function getClumsyProduct(num1, num2){
    const startTime = new Date();
    let endTime = new Date();
    while(endTime.getTime()-startTime.getTime() <= 2000){
        endTime = new Date();
    }
    return num1 * num2;
}
console.time("FirstCallWithoutCaching");
console.log(getClumsyProduct(4,5));
console.timeEnd("FirstCallWithoutCaching")

console.time("SecondCallWithoutCaching");
console.log(getClumsyProduct(4,5));
console.timeEnd("SecondCallWithoutCaching");

function myMemoize(fn, context){
    const cachedRes = {};
    return function(...args){
        const argsCache = JSON.stringify(...args);
        if(!cachedRes[argsCache]){
            cachedRes[argsCache] = fn.call(context || this, ...args);
        }
        return cachedRes[argsCache];
    }
}

const memoizeGetClumsyProduct = myMemoize(getClumsyProduct)

console.time("FirstCallWithCaching");
console.log(memoizeGetClumsyProduct(4,5));
console.timeEnd("FirstCallWithCaching")

console.time("SecondCallWithCaching");
console.log(memoizeGetClumsyProduct(4,5));
console.timeEnd("SecondCallWithCaching");


function square(num){
    const startTime=new Date();
    let endTime=new Date();

    while (endTime.getTime() -startTime.getTime() <= 3000){
        endTime=new Date();
    }
    return num*num;
}
const memoizedSquare = myMemoize(square);
console.time("first");
console.log(memoizedSquare(10));
console.timeEnd("first");
console.time("second");
console.log(memoizedSquare(10));
console.timeEnd("second");