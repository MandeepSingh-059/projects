// @ts-check
const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');
var hitPosition = null;

let result = 0;
let currentTime = parseInt(timeLeft.textContent);//set Inner Context of timeLeft to currentTime 
var timerId;
var counter;


function randomSquare(){
    //forEach calls a function on all the elements of a array
    //square has all the squares //SYNTAX:arrayName.forEach(funciton name);
    squares.forEach(className => className.classList.remove('mole'));//remember functinon(arguement){...} can be written as-   arguement=>... and this is anon function
    //we did this to remove class mole from the squares as the mole class is where our mole is and we dont need duplicates after randomizing
    let randomPosition = squares[Math.floor(Math.random()*9)];//selecting ith index and putting it in randomPosition and math.random never return 1 so multiplying by 10 is safe
    randomPosition.classList.add('mole');
    
    hitPosition = randomPosition.id;//id of randomly selected div goes in hitPosition
}


squares.forEach(square => {
    square.addEventListener('mousedown', () =>{
        if(square.id === hitPosition){
            result++;
            score.textContent = result.toString();
            hitPosition = null; 
        }
    })
});


function moveMole(){
    timerId = setInterval(randomSquare, 500);//stored in a variable so it can be removed later
}


function countDown(){
    currentTime--;
    timeLeft.textContent = currentTime.toString();
    
    if(currentTime == 0){
        clearInterval(timerId);
        alert('GAME OVER Your Score is: ' + result);
        resetBoard();
    }
}


function resetBoard(){
    clearInterval(counter);
    
    const resetBtn = document.createElement("p");//create a para 
    const resetMsg = document.createTextNode("Click here to play again");//create a text node
    resetBtn.appendChild(resetMsg);//append text to para
    
    const title = document.getElementById("title");
    title.appendChild(resetBtn);
    
    score.textContent = "0";

    resetBtn.addEventListener("click", () =>{location.reload();});
}


function startGame(){
    clearInterval(timerId);
    counter = setInterval(countDown, 1000);
    moveMole();    
}
startGame();