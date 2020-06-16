let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let computer = document.getElementById('computer');
let roundWinner = document.getElementById('roundWinner')
let computerRock = document.getElementById('computerRock');
let computerPaper = document.getElementById('computerPaper');
let computerScissors = document.getElementById('computerScissors');
let userPoints = document.getElementById('userPoints');
let computerPoints = document.getElementById('computerPoints');
let lead = document.getElementById('lead');
let userCurrentPoints = 0;
let computerCurrentPoints = 0;
let innitialLead = 0;



// SETTING UP CLICK EVENTS FOR USER MOVES

rock.addEventListener('click', (event) => {
    clearUserMove();
    rock.classList.toggle('highlight');
    userMove = "rock";
    computerMove = computerRandomMove();
    roundWinner.innerHTML = (whoWins(userMove, computerMove));

});

paper.addEventListener('click', (event) => {
    clearUserMove();
    paper.classList.toggle('highlight');
    userMove = "paper";
    computerMove = computerRandomMove();
    roundWinner.innerHTML = (whoWins(userMove, computerMove));
});

scissors.addEventListener('click', (event) => {
    clearUserMove();
    scissors.classList.toggle('highlight');
    userMove = "scissors";
    computerMove = computerRandomMove();
    roundWinner.innerHTML = (whoWins(userMove, computerMove));
});


const clearUserMove = () => {
    rock.classList.remove('highlight');
    paper.classList.remove('highlight');
    scissors.classList.remove('highlight');
}

const clearComputerMove = () => {
    computerRock.classList.remove('displayComputerMove');
    computerPaper.classList.remove('displayComputerMove');
    computerScissors.classList.remove('displayComputerMove');
};

// GENERATING COMPUTER MOVE

const computerRandomMove = () => {
    clearComputerMove();
    let moves = ['rock', 'paper', 'scissors'];
    let computerMove = moves[Math.floor(Math.random() * moves.length)];
    computerMoveAppear(computerMove);
    return computerMove;
}

const computerMoveAppear = (computerMove) => {
    if (computerMove === 'rock') {
        return computerRock.classList.add('displayComputerMove');
    } else if (computerMove === 'paper') {
        return computerPaper.classList.add('displayComputerMove');
    } else {
        return computerScissors.classList.add('displayComputerMove');
    }
}


// WHO IS THE WINNER 

const whoWins = (userMove, computerMove) => {
    if (userMove === computerMove) {
        userCurrentPoints += 1;
        computerCurrentPoints += 1;
        userPoints.innerHTML = userCurrentPoints;
        computerPoints.innerHTML = computerCurrentPoints;
        currentLead();
        return "Evan Stevens!!";
    };

    if ((userMove === 'rock' && computerMove === 'scissors') || (userMove === "scissors" && computerMove === "paper") || (userMove === "paper" && computerMove === "rock")) {
        userCurrentPoints += 1;
        userPoints.innerHTML = userCurrentPoints;
        currentLead();
        return `Well played!!`;
    } else {
        computerCurrentPoints += 1;
        computerPoints.innerHTML = computerCurrentPoints;
        currentLead();
        return "HAHA YOU LOOSE!!";
    }

}

// WHO IS IN THE LEAD

const currentLead = () => {
    let totalUserPoints = userPoints.innerHTML;
    let totalComputerPoints = computerPoints.innerHTML;

    if (totalUserPoints === totalComputerPoints) {
        lead.innerHTML = "Equals Pequals!";
    } else if (totalUserPoints > totalComputerPoints) {
        lead.innerHTML = "You are in the lead!";
    } else {
        lead.innerHTML = "The computer is in the lead!"
    }
}

// RESET 

let resetButton = document.querySelector('button');
resetButton.addEventListener("click", (event) => {
    location.reload();
})




