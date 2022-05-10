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
        resultText.innerText = "It's a draw";
        
        
    }
    else if(playerSelection.toLowerCase() == "rock"&& computerSelection.toLowerCase() == "scissor"){
        
        scoreUser++;
        checkWinnerGame(scoreUser,scoreCPU);
        resultText.innerText = "You Won! Rock beats Scissor";
        
         
    }
    else if(playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper"){
        
        scoreCPU++;
        checkWinnerGame(scoreUser,scoreCPU);
        resultText.innerText = "You Lose! Paper beats Rock";
        
         
    }
    else if(playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "paper"){
        resultText.innerText = "It's a draw";

    }
    else if(playerSelection.toLowerCase() == "paper"&& computerSelection.toLowerCase() == "rock"){
        
        scoreUser++;
        checkWinnerGame(scoreUser,scoreCPU);
        resultText.innerText = "You Won! Paper beats Rock";
        
         
    }
    else if(playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissor"){
        
        scoreCPU++;
        checkWinnerGame(scoreUser,scoreCPU);
        resultText.innerText = "You Lose! Scissor beats Paper";
        
        
    }
    else if(playerSelection.toLowerCase() == "scissor" && computerSelection.toLowerCase() == "scissor"){
        
        resultText.innerText = "It's a draw";
        
    }
    else if(playerSelection.toLowerCase() == "scissor" && computerSelection.toLowerCase() == "paper"){
        
        scoreUser++;
        checkWinnerGame(scoreUser,scoreCPU);
        resultText.innerText = "You Won! Scissor beats Paper";
        
         
    }
    else if(playerSelection.toLowerCase() == "scissor" && computerSelection.toLowerCase() == "rock"){
        
        scoreCPU++;
        checkWinnerGame(scoreUser,scoreCPU);
        resultText.innerText = "You Lose! Rock beats Scissor";
        
        
    }
    else{
        resultText.innerText = "Something Wrong happend";
        
        
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
    if (scoreUser == 5){

        alert("You have won the game!");
        scoreUser = resetScoreUser();
        scoreCPU = resetScoreCPU();
    
    }
    else if(scoreCPU == 5){

        alert("You lost");
        scoreUser = resetScoreUser();
        scoreCPU = resetScoreCPU();
        
    }
}

let btn1 = document.createElement("button");
let btn2 = document.createElement("button");
let btn3 = document.createElement("button");

btn1.innerText = "Rock";
btn2.innerText = "Paper";
btn3.innerText = "Scissor";

btn1.addEventListener("click",rockSelection);

function rockSelection(){
    playerSelection = "Rock";
    cpuChoice = computerPlay();
    playRound(playerSelection,cpuChoice);
    resultContainer.innerHTML = scoreUser + " : " + scoreCPU;
}

btn2.addEventListener("click",paperSelection);

function paperSelection(){
    playerSelection = "Paper";
    cpuChoice = computerPlay();
    playRound(playerSelection,cpuChoice);
    resultContainer.innerHTML = scoreUser + " : " + scoreCPU;
}

btn3.addEventListener("click",scissorSelection);

function scissorSelection(){
    playerSelection = "Scissor";
    cpuChoice = computerPlay();
    playRound(playerSelection,cpuChoice);
    resultContainer.innerHTML = scoreUser + " : " + scoreCPU;
}


document.body.appendChild(btn1);
document.body.appendChild(btn2);
document.body.appendChild(btn3);

let resultContainer = document.createElement("div");

let resultText = document.createElement("p");
resultText.innerText = "Result Text";

document.body.appendChild(resultText);

resultContainer.innerHTML = scoreUser + " : " + scoreCPU; //so it says 0 : 0 at the start
document.body.append(resultContainer);

function resetScoreUser(){
    scoreUser = 0;
    return scoreUser;
}
function resetScoreCPU(){
    scoreCPU = 0;
    return scoreUser;
}
