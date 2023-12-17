let userScore = 0;
let compScore = 0;
const msg = document.querySelector("#msg");
const userPara = document.querySelector("#user-score");
const compPara = document.querySelector("#comp-score");
const choies = document.querySelectorAll(".choice");

const getCompChoice = () => {
  const option = ["rock", "paper", "scissors"];
  const randInd = Math.floor(Math.random() * 3);
  return option[randInd];
};

const drawGame = () => {
  console.log("Draw game");
  msg.innerHTML = "It a draw!,Play again";
};

const showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    userPara.innerText = userScore;
    msg.innerText = "you win";
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compPara.innerText = compScore;
    msg.innerText = "Your lose";
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log("user choice = ", userChoice);

  const compChoice = getCompChoice();
  console.log("comp choice=", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};

choies.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
