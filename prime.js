//************************isPrime****************** */
function isPrime (num){
    if (num==1){
        return false;
    }
    for (let i=2 ; i<=Math.sqrt(num); i++){
        if(num % i ===0){
            return false;
        }
    }
    return true;
}

console.log(isPrime(9));


// ***************Get the nth Prime number************************//
function getPrime (num){
    // let primes=[];
    // for(let i=2;primes.length<=num;i++){
    //     if(isPrime(i)){
    //         primes.push(i);
    //     }
    // }
    // console.log(primes);
    // return primes[num-1];
    let i=2;
    let count=0;
    while(count<num){
        if(isPrime(i)){
            count++;
            if(count==num){
                return i;
            }
        }
        i++;
    }
    return i;
}

console.log(getPrime(7));