const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) => {
    userChoice=e.target.id;
    userChoiceDisplay.innerHTML=userChoice;
    computerChoice=computerPlay();
    computerChoiceDisplay.innerHTML=computerChoice;
    resultDisplay.innerHTML=playRound();
}));
const win='Player wins';
        const lose='Computer wins';
        const draw='Both draws';
function computerPlay()
        {
            let random=['rock','paper','scissors'];
            return random[Math.floor(Math.random() *3)];
        }
        function playRound()
        {

            if(userChoice=="rock" && computerChoice=="scissors" || userChoice=="paper" && computerChoice=="rock" || userChoice=="scissors" && computerChoice=="paper") return win;
            
            else if(userChoice=="paper" && computerChoice=="scissors" || userChoice=="scissors" && computerChoice=="rock" || userChoice=="rock" && computerChoice=="paper") return lose;
            
            else return draw;
         }