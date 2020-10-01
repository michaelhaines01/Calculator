

function computerplay(){
    let element = ["rock","paper",'scissor']
    var randomNumber = Math.floor(Math.random()*element.length);
    return (element[randomNumber])
}


function playround(computerselection,playerplay)
{   
    if(playerplay=="rock" && computerselection=='scissor'|| playerplay=="scissor" && computerselection=='paper' || playerplay=="paper" && computerselection=='rock')
    {
    return [`You win! ${playerplay} beats ${computerselection}!`, 'player']
   
    }
    else if(playerplay=="scissor" && computerselection=='rock'|| playerplay=="paper" && computerselection=='scissor' || playerplay=="rock" && computerselection=='paper'){
    return [`You lose! ${computerselection} beats ${playerplay}!`,'computer']
   
    }
    else if(playerplay==computerselection) {
        return[`${playerplay} is the same as ${computerselection}`,'same']
    }
   
}
function game()
{
    let player = 0;
    let computer = 0;

    for(let i = 0; i<5; i++){
        let playerplay = prompt("rock paper or scissor?");
        const computerselection = computerplay();
        let x = playround(computerselection,playerplay)
        console.log(x[0]);
        if (x[1]== 'computer'){
            computer++;
        }
        else if (x[1]== 'player'){
            player++;
        }
    }
    if(player>computer){
    console.log(`You win ${player} to ${computer}`)
    }
    console.log(`You lose ${player} to ${computer}`)
}
game()

