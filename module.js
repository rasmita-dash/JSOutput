//************************Module************************* */
const module= (function(){
    var count=0;
    function private(){
        console.log("private")
    }
    return {
        increment: function(){
            count++;
            console.log(count);
        },
        decrement: function(){
            count--;
        },
        getCount: function(){
            return count;
        }
    }
})();

module.increment(); //1
module.private(); // Error: this is not a method