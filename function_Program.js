//******************************************** */
{
    var ah= 5;
    function D(){
        console.log(ah);
    }
    x=20;
}
D(); // 5
var ah=50;
D(); //50

//******************************************* */
function E(){
    var ai= 5;
    function B(){
        console.log(ai);
    }
    ai=20;
    return B;  
}
var aj= E();
var ai=50;
aj(); 

//20 // Since B() has created closure with it's lexical scope
//*************************************** */

function F(){
    var ak= 5;
    function G(){
        console.log(ak);
    }
    return G;  // Clolsure: Function along with it's Lexical scope
}
var c= F();
var ak=50;
c(); 
//5

//**************************************************** */
function A(){
    console.log("I am defined globally");
}
{
    function A(){
        console.log("I am defined in block");
    }
    function AA(){
        function AAA(){
            console.log("Another function defined in a function within block");
        }
        console.log("Another function defined in block");
    }
    AA();
}
A();

//Another function defined in block
//I am defined in block    // the 1st A() will be replaced with  A() defined in the block. 

//********************************************8 */
function H(){
    function I(){
        console.log("I am defined in I()");
    }
    I();
}
H();
//I();// I() is not defined

//************************************** */

J(); //Function Statement or Function Declaration
// K(); //Uncaught TypeError: K is not a function

function J(){
    console.log("Function Statement or Function Declaration")
}

var K = function(){
    console.log("Function Expression")
}
K(); //Function Expression

//************************************ */
function UpdateCounter(){
    var counter= 0; var test="";
    this.incrementCounter = function (){
        counter++;
        console.log(counter);
    }

    this.decrementCounter = function (){
        counter--;
        console.log(counter);
    }
}
var counter1 =new UpdateCounter(); // Constructor function
counter1.incrementCounter(); counter1.incrementCounter(); counter1.decrementCounter(); // 1  2   1

var counter2 =new UpdateCounter(); // WIll have a different instance 
counter2.decrementCounter(); counter2.incrementCounter(); // -1   0

counter1.incrementCounter(); // 2
counter2.incrementCounter();//1

//******************************* */
function UpdateCounter2(){
    var counter= 0;
    return function incrementCounter(){
        counter++;
        console.log(counter);
    }
}
var counter11 =UpdateCounter2();
counter11(); counter11(); counter11(); // 1  2   3


var counter21 =UpdateCounter2(); // WIll have a different instance 
counter21(); counter21(); // 1   2

counter11(); // 4
counter21();//3

//************************Higher Order function /callback***************** */
function K(arg1){
    console.log("K");
    arg1();
}

function L(){
    console.log("L")
}
K(L);  //K is higher order function. L is first order function/ callback

var a = function M(){
    console.log("Named function expression");
    M(); // The named function can only be accessible within the function like recursion
}
a(); //Named function expression
// M(); //Uncaught ReferenceError: M is not defined

// function(){ //Uncaught SyntaxError: Function statements require a function name
//     console.log("Anonymous Function")
// }