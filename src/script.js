let computerOne = document.getElementById("one");
let computerTwo = document.getElementById("two");
let computerThree = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let playerScoreElement = document.getElementById("player-score");
let computerScoreElement = document.getElementById("computer-score");
let restartButton = document.getElementById("restart");

let playerScore = 0;
let computerScore = 0;

const updateScore = () => {
  playerScoreElement.textContent = `Score: ${playerScore}`;
  computerScoreElement.textContent = `Score: ${computerScore}`;
}

const handleResult = (playerChoice) => {
  let number = (Math.floor(Math.random() * 3)) + 1;
  let computerChoice;
  if (number == 1) {
    computerChoice = "Rock";
    computerOne.classList.add("animate-bounce");
  } else if (number == 2) {
    computerChoice = "Paper";
    computerTwo.classList.add("animate-bounce");
  } else {
    computerChoice = "Scissors";
    computerThree.classList.add("animate-bounce");
  }

  p2.innerHTML = `${playerChoice} Selected`;
  setTimeout(() => {
    p1.innerHTML = `${computerChoice} Selected`;
    if (playerChoice == computerChoice) {
      seven.innerHTML = "Match draw !!";
    } else if ((playerChoice == "Rock" && computerChoice == "Scissors") ||
               (playerChoice == "Paper" && computerChoice == "Rock") ||
               (playerChoice == "Scissors" && computerChoice == "Paper")) {
      seven.innerHTML = "Congratulations, you win &#129395 !!";
      playerScore++;
    } else {
      seven.innerHTML = "Computer wins, you lost &#128542 !!";
      computerScore++;
    }
    updateScore();
    setTimeout(() => {
      computerOne.classList.remove("animate-bounce");
      computerTwo.classList.remove("animate-bounce");
      computerThree.classList.remove("animate-bounce");
    }, 1000);
  }, 1000);
}

four.addEventListener("click", function() {
  handleResult("Rock");
});

five.addEventListener("click", function() {
  handleResult("Paper");
});

six.addEventListener("click", function() {
  handleResult("Scissors");
});

restartButton.addEventListener("click", function() {
  playerScore = 0;
  computerScore = 0;
  updateScore();
  p1.innerHTML = "";
  p2.innerHTML = "";
  seven.innerHTML = "Who wins??????";
});
