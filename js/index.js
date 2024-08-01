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
console.log(`Price per kilometer ${kmPrice} €/km`);
// Prices messages
const messagePrice = "Your ticket price is:";
// Possible discount
let discount = null;

//--- Processing phase
//--- Create the event button
button.addEventListener("click", function () {
  //--- Collection phase
  //Receive the inputs values
  const distance = distanceField.value;
  const age = ageField.value;

  // Calcolate the final price
  let ticketPrice = (kmPrice * distance).toFixed(2);
  // Calcolate the discounts
  if (age < 18) discount = 20;
  else if (age > 65) discount = 40;

  if (discount) {
    //Discount mssg
    const discountMssg = `You have received a ${discount}% discount.`;
    console.log(discountMssg);
    //Calcolate the discount amount
    const discountAmount = (ticketPrice / 100) * discount;
    console.log(discountAmount);
    //Calcolate the ticket price in discount conditions
    ticketPrice -= discountAmount;
    console.log(`${messagePrice} ${ticketPrice} €`);
  }

  // Print the ticket price
  console.log(`${messagePrice} ${ticketPrice} €`);
});
