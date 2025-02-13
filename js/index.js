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
//Form
const form = document.querySelector("form");
const button = document.getElementById("pay-btn");
const distanceField = document.getElementById("distance");
const ageField = document.getElementById("age");
//Bill
const resultPrice = document.getElementById("price");
const resultDiscount = document.getElementById("discount");
const resultInfo = document.getElementById("info");
//---Bonus
const nameField = document.getElementById("name");
const resultpassengerName = document.getElementById("passenger-name");
const resultCarraige = document.getElementById("carraige");
const resultCpCode = document.getElementById("cp-code");
//--Valdation
const errorMssg = `<strong class = "text-danger-emphasis">!ERROR:</strong> Please insert in the correct way requared details`;
const resultError = document.getElementById("ticket-container");
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
  const age = parseInt(ageField.value);
  const name = nameField.value.trim();

  const isValid = !name || !isNaN(name) || distance <= 0;

  //! Validation
  if (isValid) {
    resultError.innerHTML = errorMssg;
  } else {
    // Calcolate the final price
    let ticketPrice = (kmPrice * distance).toFixed(2);
    let standartPrice = ticketPrice;
    // Calcolate the discounts
    if (age == "underage") discount = 20;
    else if (age == "senior") discount = 40;

    if (discount) {
      //Discount mssg
      const discountMssg = `You have received a ${discount}% discount.`;
      //Print discount mssg in page
      resultInfo.innerHTML = `<strong>${discountMssg}</strong>`;
      //Print discount mssg in consol
      console.log(discountMssg);

      //Calcolate the discount amount
      const discountAmount = ((ticketPrice / 100) * discount).toFixed(2);
      //Print in consol
      console.log(`Your discount amount is ${discountAmount} €`);

      //Calcolate the ticket price in discount conditions
      ticketPrice -= discountAmount;
      //Print ticket price in page
      resultPrice.innerHTML = `${messagePrice} ${ticketPrice}€  <del class='text-danger-emphasis fst-italic'>${standartPrice}€</del>`;
      //Print ticket price in consol
      console.log(`${messagePrice} ${ticketPrice} €`);
    } else {
      // Print the ticket price in page
      resultPrice.innerHTML = `${messagePrice} <strong>${ticketPrice}$</strong>`;
      // Print the ticket price in consol
      console.log(`${messagePrice} ${ticketPrice} €`);
      //Print discount mssg in page
      resultInfo.innerHTML = `Standart Ticket`;
    }
    //Print info in Pge
    resultInfo.innerText += `
        Price per kilometer ${kmPrice}€/km.
        Your destination is ${distance} KM from here.
        `;

    //--Bonus
    //Create max rendom numbers
    const maxCarraige = 20;
    const maxCpcode = 100000;
    //--Generating numbers
    // Carraige number
    const carraigeNumber = Math.floor(Math.random() * maxCarraige) + 1;
    console.log(carraigeNumber);
    // Cp code number
    const cpCode = Math.floor(Math.random() * maxCpcode) + 1;
    console.log(cpCode);

    //--Processing
    // Print the passenger name on page
    resultpassengerName.innerHTML += name;
    // Print carraige nr  on page
    resultCarraige.innerHTML += `<em>${carraigeNumber}</em>`;
    // Print Cp code on page
    resultCpCode.innerHTML += `<em>${cpCode}</em>`;
  }
  //Reset form
  form.reset();
});

//? Extension exercise
// Add e switch mode. Dark mode and Day mode

//---  Praparation phase
// Retrieve the element interested in Dom
const wrapperElement = document.querySelector(".wrapper");
const darkModeBtn = document.getElementById("dark-mode-btn");
// Create events
let switchMode = new Event("click");
// A flag using to change the innertext button
let isDarkMode;
// Create functions
function handleSwitcheMode() {
  if (isDarkMode) {
    // Inner text
    darkModeBtn.innerText = "Day Mode";
    // Change flag value
    isDarkMode = false;
  } else {
    // Inner text
    darkModeBtn.innerText = "Dark Mode";
    // Change flag valu
    isDarkMode = true;
  }
  // Change Background body
  wrapperElement.classList.toggle("bg-dark");
  // Change the button border color
  darkModeBtn.classList.toggle("btn-outline-dark");
  darkModeBtn.classList.toggle("btn-outline-light");
}
// Procesing phase
// Add event Listener
darkModeBtn.addEventListener("click", handleSwitcheMode);
