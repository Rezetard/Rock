function computerChoice() {
    let cc1 = Math.ceil(Math.random()*3);
    switch (cc1) {
        case 1: return ('Rock');
        case 2: return ('Paper');
        case 3: return ('Scissors');
    }
}
var H = 0;
var C = 0;
const YouPicked = document.querySelector('.YouPicked')
const ComputerPicked = document.querySelector('.ComputerPicked')

function playGame(pc) {
   const cc = computerChoice();

   YouPicked.textContent = 'You Picked: ' + pc
   ComputerPicked.textContent = 'Computer Picked: ' + cc

   if (cc === pc) return 'its a tie'

    else if (cc === 'Scissors' && pc === 'Paper') {
    return 'Computer'}

    else if (cc === 'Rock' && pc === 'Scissors') {
    return 'Computer'}

    else if (cc === 'Paper' && pc === 'Rock') {
    return 'Computer'}

    else {
    return 'Human'} 

}

const btn1 = document.querySelectorAll('button');
const HumanScore = document.querySelector('.HumanScore')
const ComputerScore = document.querySelector('.ComputerScore')
const FinalScore = document.querySelector('span')


btn1.forEach (btn1 => (btn1.addEventListener('click', e => {
    var x = (playGame(btn1.textContent))
    
    if (x === 'Computer'){
        C++;
        ComputerScore.textContent = C;
        if (C === 5) {FinalScore.textContent = 'Computer Wins', C = 0, H = 0, ComputerScore.textContent = C; HumanScore.textContent = H } 
        ;}

    else if (x === 'Human') {
        H++;
        HumanScore.textContent = H;
        if (H === 5) {FinalScore.textContent ='Human Wins', H = 0, C = 0,  HumanScore.textContent = H; ComputerScore.textContent = C}
        ;}

})));
 

