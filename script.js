// const button = document.querySelector("button")
// const heading = document.querySelector("h1")

// //1. Takes the button and wait for a prompt using the addEventListener
// button.addEventListener("click", function() {

// //2.Waiting on the prompt to be triggered using click
// //3.When the prompt is triggered, a name will be asked
//     const name = prompt("What is your name?");

// //4.The heading will change due to the text context
//     heading.textContent = `Hi, ${name}`;

// //5.Console allows us to see the output in the console via inspect
//     console.log("The button has not been clicked");
// })

const button = document.querySelector("button")
const heading = document.querySelector("h1")
button.addEventListener("click", function() {
    const name = prompt("What would you like to today?")
)}
const moodParagraph = document.querySelector("mood")


//Task:
//change the button text after it is clicked
 const name = prompt("What do would you like to do today")
//Add a second paragraph that updates with todays mood 
heading.textContent = `Hi, ${name}`
moodParagraph.textContent = "Thanks!";

console.log("The button has been clicked");
//Style the button in CSS

//Add one console.log message of your choice
console.log("They said they would like some rest");