// //**********************Function borrowing************************ */
function userDetails(city, state){
    console.log(this.firstName + " " + this.lastName + " from " + city + ", " + state)
}
let user1={
    firstName:"Rasmita",
    lastName:"Dash"
}
let user2={
    firstName:"Nipun",
    lastName:"Bajaj"
}
let user3={
    firstName:"Meenakshi",
    lastName:"Joshi"
}
userDetails.call(user1, "Bangalore", "Karnataka");
userDetails.apply(user2, ["New Delhi", "Uttar Pradesh"]);
let user3Details = userDetails.bind(user3, "Delhi", "Delhi");
user3Details();