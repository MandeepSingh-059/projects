// @ts-check
document.addEventListener('DOMContentLoaded', () =>{
    //cards
    const cardArray = [
        {
            name: 'fries',
            img: './images/fries.png'
        }, 
        {
            name: 'fries',
            img: './images/fries.png'
        }, 
        {
            name: 'cheeseBurger',
            img: './images/cheeseBurger.png'
        }, 
        {
            name: 'cheeseBurger',
            img: './images/cheeseBurger.png'
        }, 
        {
            name: 'hotDog',
            img: './images/hotDog.png'
        }, 
        {
            name: 'hotDog',
            img: './images/hotDog.png'
        }, 
        {
            name: 'ice-cream',
            img: './images/ice-cream.png'
        }, 
        {
            name: 'ice-cream',
            img: './images/ice-cream.png'
        }, 
        {
            name: 'milkshake',
            img: './images/milkshake.png'
        }, 
        {
            name: 'milkshake',
            img: './images/milkshake.png'
        }, 
        {
            name: 'pizza',
            img: './images/pizza.png'
        }, 
        {
            name: 'pizza',
            img: './images/pizza.png'
        } 
    ];

    cardArray.sort(() => 0.5 - Math.random()); //=> arrow operator used to shorten the syntax 
    //()means function() is being made and it has only one line i.e. 0.5-Math.random()

    //board
    const resultDisplay = document.querySelector('#result');
    const grid = document.querySelector('.grid');//with querySelector we can use any CSS selector format unlike getElementById where we can only use id.
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];


    function createBoard(){
        for(let i=0; i<cardArray.length; i++){
            var card = document.createElement('img');//create a element first then we can append it
            card.setAttribute('src', './images/blank.png');
            card.setAttribute('data-id', i.toString());//embed custom data to a element
            card.addEventListener('click', flipCard);//click is a function and onClick is a attribute
            //click triggers event handler and onclick triggers the attached func
            //click is modern and onClick is obsolete
            card.width = 100;//change the width and height of the image to fit grid
            card.height = 100;
            grid.appendChild(card);
        }
    }

    function checkForMatch(){
        var cards = document.querySelectorAll('img');//selects all the images in document
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if(cardsChosen[0] === cardsChosen[1]){//check if names of the 2 cards is same or not
            alert('You Found a Match');
            cards[optionOneId].setAttribute('src', './images/white.png');
            cards[optionTwoId].setAttribute('src', './images/white.png');
            cardsWon.push(cardsChosen);
        } else{
            cards[optionOneId].setAttribute('src', './images/blank.png');
            cards[optionTwoId].setAttribute('src', './images/blank.png');
            alert('Sorry Try Again');
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length.toString();
        if(cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = 'Congratultions You Won!!';
        }
    }

    function flipCard(){
        var cardId = this.getAttribute('data-id');//refers to object it belongs to// here it refers to object that is calling this function
        cardsChosen.push(cardArray[cardId].name);//push() adds to end of array and returns new length
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);

        if(cardsChosen.length === 2){
            setTimeout(checkForMatch, 500);//call this function after 500ms
        }
    }

    createBoard();
})