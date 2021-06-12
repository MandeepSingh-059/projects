// @ts-check
const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');
var hitPosition = null;

let result = 0;
let currentTime = parseInt(timeLeft.textContent);//set Inner Context of timeLeft to currentTime 
var timerId = null;



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
                score.textContent = result;
                hitPosition = null; 
            }
        })
    });



    function moveMole(){
        timerId = setInterval(randomSquare, 500);//stored in a variable so it can be removed later
    }

    moveMole();

    function countDown(){
        currentTime--;
        timeLeft.textContent = currentTime;

        if(currentTime == 0){
            clearInterval(timerId);
            alert('GAME OVER Your Score is:' + result);
        }
    }

let counter = setInterval(countDown, 1000);