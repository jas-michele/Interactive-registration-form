// alert("Js is loaded!")

console.log("Javascript is Working!")
const username = document.getElementById("username")
const quantity = document.getElementById("quantity")
const errorBox = document.getElementById("errorBox")
const form = document.querySelector("form")

window.addEventListener('load', () => {
  const savedUserName = sessionStorage.getItem('username');
  if (savedUserName) {
    username.value = savedUserName;
  }
});

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    console.log("Default Behavior Prevented!")
    sessionStorage.setItem("username", username.value)
})



// const storedData = JSON.parse(localStorage.getItem("testData"))
// console.log(storedData)


console.log(username)
// /*
username.addEventListener("blur", (e) => {
    // alert(e.target.value)
    console.dir(username.value)

    if(username.value == ""){ //Checking to see if there is a value here
        //and if so, Giving a custom error message
        username.setCustomValidity("We need your name Crewmate!!")
    } else {
        // Otherwise, resetting the Custom validation to an empty string
        username.setCustomValidity("")
    }
    // and changing that little tooltip with whatever Validation Errors are present.
    username.reportValidity()
})
// */
quantity.addEventListener("blur", (e) => {
    // alert(e.target.value)
    //Testing to see if the number is above a certain value
    if(quantity.value < 21){
        //and if it is, return some Custom error information, instead of the Default information
        quantity.setCustomValidity("This number needs to be BIGGER!")
        quantity.focus = true;
    } else {
        // Otherwise, resetting the Custom validation to an empty string
        quantity.setCustomValidity("")
    }
    // and changing that little tooltip with whatever Validation Errors are present.
    quantity.reportValidity()
    errorBox.innerText = quantity.validationMessage
})