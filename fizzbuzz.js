//*******Fizz for divide y 2, Buzz for Divide by 3, FizzBuzz for divide by both 2 & 3******** */
function fizzbuzz(){
    for(let i=1; i<=100;i++){
        let f= i%2 ==0;
        let b = i%3 ==0;
        console.log(`${i}:  ${f?(b?"fizzbuzz":"fizz"): (b?"buzz":"")}`);
    }
}
fizzbuzz();