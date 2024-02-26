// let userInput = prompt("Enter a number");
// let input = parseInt(userInput);

// // console.log(input);

// if (!isNaN(input)) {
//   if (input % 2 === 0 && input % 3 === 0) {
//     console.log("Divisible by both 2 and 3");
//   } else if (input % 2 === 0) {
//     console.log("Divisible by 2");
//   } else if (input % 3 === 0) {
//     console.log("Divisible by 3");
//   } else {
//     console.log("Not divisible by both 2 and 3!");
//   }
// } else {
//   console.log("Not a number! \nEnter a number");
// }



const quiz = {
  mathQuestion: [
    {
      question1: "What will be the result of; \nconsole.log(math.ceil(7.2))?",
      answer1: 8,
    },

    {
      question2: "What will be the result of; \nconsole.log(math.floor(9.2))?",
      answer2: 9,
    },
  ],
};

let score = 2;

function runQuiz() {
  for (const arr of quiz.mathQuestion) {

    const quest1 = parseInt(prompt(quiz.mathQuestion[0].question1));

    if (quest1 === quiz.mathQuestion[0].answer1) {
      alert("CORRECT!");
    } else {
      alert("INCORRECT!");
    }

    const quest2 = parseInt(prompt(quiz.mathQuestion[1].question2));

    if (quest2 === quiz.mathQuestion[1].answer2) {
      alert("CORRECT!");
    } else {
      alert("INCORRECT!");
    }

    if (
      quest1 === quiz.mathQuestion[0].answer1 &&
      quest2 === quiz.mathQuestion[1].answer2
    ) {
      score = 2;
      alert(`Your final score: ${score}`);
    } else if (
      quest1 === quiz.mathQuestion[0].answer1 ||
      quest2 === quiz.mathQuestion[1].answer2
    ) {
      score = 1;
      alert(`Your final score: ${score}`);
    } else {
      score = 0;
      alert(`Your final score: ${score}`);
    }
  }
}

runQuiz();
