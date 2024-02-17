let userInput = prompt("Enter a number");
let input = parseInt(userInput);

// console.log(input);

if (!isNaN(input)) {
  if (input % 2 === 0 && input % 3 === 0) {
    console.log("Divisible by both 2 and 3");
  } else if (input % 2 === 0) {
    console.log("Divisible by 2");
  } else if (input % 3 === 0) {
    console.log("Divisible by 3");
  } else {
    console.log("Not divisible by both 2 and 3!");
  }
} else {
  console.log("Not a number! \nEnter a number");
}
