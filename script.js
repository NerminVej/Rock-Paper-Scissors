//computerPlay Function that has a variable and changes that variable at random
//variable is either rock , paper or scissors
//test if the function returns the expected outputs at random
let scoreUser = 0;
let scoreCPU = 0;
function computerPlay(){
    let cpuChoice = Math.floor(Math.random() * (3 - 0) + 0);
    //mit Math.floor(Math.random() * (max - min) + min) kriegen wir eine random number;
    if (cpuChoice == 0){
        cpuChoice = "Rock";
        return cpuChoice;
    }
    else if(cpuChoice == 1){
        cpuChoice = "Paper";
        return cpuChoice;
    }
    else if(cpuChoice ==2){
        cpuChoice = "Scissor";
        return cpuChoice;
    }
}


//playFunction with two parameters playerSelections and computerSelection
// return a String that decleares the winner
//function should take any case

function playRound(playerSelection, computerSelection){

    if(playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "rock")
    {
        return "It's a draw";
        
    }
    else if(playerSelection.toLowerCase() == "rock"&& computerSelection.toLowerCase() == "scissor"){
        
        
        console.log("You Won! Rock beats Scissor") ;
         scoreUser++;
         
    }
    else if(playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper"){
        
        
        console.log ("You Lose! Paper beats Rock");
         scoreCPU++;
         
    }
    else if(playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "paper"){
         return "It's a draw";
    }
    else if(playerSelection.toLowerCase() == "paper"&& computerSelection.toLowerCase() == "rock"){
        
        
        console.log( "You Won! Paper beats Rock");
        scoreUser++;
         
    }
    else if(playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissor"){
        
        console.log("You Lose! Scissor beats Paper");
        scoreCPU++;
        
    }
    else if(playerSelection.toLowerCase() == "scissor" && computerSelection.toLowerCase() == "scissor"){
        return "It's a draw";
        
    }
    else if(playerSelection.toLowerCase() == "scissor" && computerSelection.toLowerCase() == "paper"){
        
        
        console.log("You Won! Scissor beats Paper");
        scoreUser++;
         
    }
    else if(playerSelection.toLowerCase() == "scissor" && computerSelection.toLowerCase() == "rock"){
        
        
        console.log("You Lose! Rock beats Scissor") ;
        scoreCPU++;
        
    }
    else{
        console.log("wtf");
        alert("wtf");
    }
}

// return the results of the function

//game function that has playRound function inside
//set a variable to play 5 rounds and two to keep a score
// use a loop

function game(){

    
    for(let i = 0;i <= 5;i++){
        //Prompt the User to input his value
        //Print out the cpu choice / call the cpu function
        //call the playRound function
        //for loop goes over it 5 times at max
        let playerSelection = prompt("Enter Rock/Paper/Scissor");
        alert("You chose " + playerSelection);
        alert(playerSelection);
        
        let cpuChoice = computerPlay();
        alert(cpuChoice);
        
        playRound(playerSelection,cpuChoice);
        
        console.log(scoreUser);
        checkWinnerGame(scoreUser,scoreCPU);
        


    }



}

function checkWinnerGame(scoreUser,scoreCPU){
    if (scoreUser == 3){
        console.log("Congrats you have won!");
       
    }
    else if(scoreCPU == 3){
        console.log("You lost");
        
    }
}






