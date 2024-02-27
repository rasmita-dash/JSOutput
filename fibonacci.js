//*******************************Fibonacii Series*********************************** */
function fibonacii(Num){
    if(Num<=0){
        return[];
    } if(Num ==1){
        return[0];
    }
    series =[0,1];
    for(let i=2; i<Num; i++){
        series[i] = series[i-1] +series[i-2];
    }
    return series;
}
console.log(fibonacii(5));