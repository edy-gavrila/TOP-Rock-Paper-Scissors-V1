
//get an integer between 0 and 2
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function computerPlay() {
  let game = ["Rock", "Paper", "Scissors"];
  return game[getRndInteger(0, 2)];
}

function playRound(playerHand, computerHand) {
  if (playerHand === computerHand) {
    return "It's a tie on " + playerHand;
  }

  if (
    (playerHand === "Rock" && computerHand === "Scissors") ||
    (playerHand === "Paper" && computerHand === "Rock") ||
    (playerHand === "Scissors" && computerHand === "Paper")
  ) {
    return "You win: " + playerHand + " beats " + computerHand;
  }

  return "You lose: " + computerHand + " beats " + playerHand;
}

//same function as before but with more useful return
function returnWinnerHand(playerHand, computerHand) {
  if (playerHand === computerHand) {
    return playerHand;
  }

  if (
    (playerHand === "rock" && computerHand === "scissors") ||
    (playerHand === "paper" && computerHand === "rock") ||
    (playerHand === "scissors" && computerHand === "paper")
  ) {
    return playerHand;
  }

  return computerHand;
}

console.log(playRound("Rock", "Paper"));

function game() {
  let score = [0, 0];
  let playerHand = "",
    computerHand = "";

  for (let i = 0; i < 5; i++) {
    playerHand = prompt("Please enter your hand: ").toLowerCase();
    computerHand = computerPlay().toLowerCase();
    let winner = returnWinnerHand(playerHand, computerHand);
    console.log("winner", winner);
    if (winner === playerHand) {
      score[0]++;
    }

    if (winner === computerHand) {
      score[1]++;
    }
  }

  console.log(
    "After 5 games score is: Human " + score[0] + " - " + score[1] + " Computer"
  );
}

game();
