function computerChoice() {
    let cc1 = Math.ceil(Math.random()*3);
    switch (cc1) {
        case 1: return ('Rock');
        case 2: return ('Paper');
        case 3: return ('Scissors');
    }
}



function playerChoice() {
    return prompt('Rock, Paper or Scissors?');
}

function playGame() {
   const cc = computerChoice();
   const pc = playerChoice();

   if (cc === pc) return 'its a tie'

   else if (cc === 'Scissors' && pc === 'Paper') return 'Computer'

   else if (cc === 'Rock' && pc === 'Scissors') return 'Computer'

   else if (cc === 'Paper' && pc === 'Rock') return 'Computer'

   else return 'Human'
}

function fiveGame() {

    var y = 0;
    var z = 0;

    for (let i = 0; i<5; i++) {
        var x = playGame();
        if (x === 'Human') y++;
         
        else if (x === 'Computer') z++;
        
        else continue;

    }
    if (y>z) return 'Human Wins'
    else if (z>y) return 'Computer wins'
    else return 'its a tie'
}

console.log(fiveGame());