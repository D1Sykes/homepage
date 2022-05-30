var playerSelect = prompt();

var choices = ["Rock", "Paper", "Scissors"];

function computerSelect() {
    return choices[~~(Math.random() * choices.length)];
}

function playTicTacToe(playerSelect, computerSelect) {
    playerSelect = playerSelect.toLowerCase();
    computerSelect = computerSelect.toLowerCase();

    if (playerSelect == computerPlay) {
        console.log("Draw")
    }
    else if (playerSelect == "rock" && computerSelect == "scissors") {
        console.log("You win")
    }
    else if (playerSelect == "paper" && computerSelect == "rock") {
        console.log("You win")
    }
    else if (playerSelect == "scissors" && computerSelect == "paper") {
        console.log("You win")
    }
    else if (computerSelect == "scissors" && playerSelect == "paper") {
        console.log("You win")
    }
    else if (computerSelect == "scissors" && playerSelect == "paper") {
        console.log("You win")
    }
    else if (computerSelect == "scissors" && playerSelect == "paper") {
        console.log("You win")
    }
}