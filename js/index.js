/*
    - Receive the interested of element on DOM
    - Create variable for the price per 1 km
    - Create the discounts variable of value null
    - Recieve the user values from inputs forms
    - Cacolate final Price
    M1
    - Print the final price in consol
    M2
    - Print the final price in page
    Bonus
    - 
*/

//--- Preparation phase
//Receive the interested element from DOM
const button = document.getElementById("pay-btn");
const distanceField = document.getElementById("distance");
const ageField = document.getElementById("age");
// Price per kilometer
const kmPrice = 0.21;
console.log(`Price per kilometer ${kmPrice} $/km`);
// Prices messages
const messagePrice = "Your ticket price is:";
// Possible discount
let discount = null;
