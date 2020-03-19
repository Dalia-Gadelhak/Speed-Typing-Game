window.addEventListener('load', init);

//Globals 

// //available levels 
// const levels = {
//     easy: 8,
//     medium: 6,
//     hard: 4
// };

let seconds = document.querySelector('#seconds');
let timeDisplay = document.querySelector('#time');


let currentLevel = 0;

function chooseLevel(sec){
seconds.innerHTML = sec;
currentLevel = sec;
timeDisplay.innerHtml = sec;
 }

//to change level 

let time = currentLevel;
let score = 0;
let isPlaying;

//DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const message = document.querySelector('#message');


const words = [
    "Mammy",
    "Gast",
    "Buch",
    "Kuh",
    "Ja",
    "Nein",
    "Mann",
    "Kind",
    "froh",
    "fruh",
    "Bett",
    "gehen",
    "laufen",
    "Katze",
    "Ente",
    "Schnee",
    "Saft",
    "langsam",
    "schnell",
    "Regal",
    "schlafen",
];

//initialize game
function init() {
  // show number of seconds in UI
  seconds.innerHTML = +currentLevel;
  //load a random word from array
  showWord(words);

  //start matching on word-input
  wordInput.addEventListener('input', startMatch)

  //call countdown every second
  setInterval(countdown, 1000); // setInterval to repeat something

  //check game status
  setInterval(checkStatus, 50);
}

//start match
function startMatch(){
    if(matchWords()){
       isPlaying = true;
       time = currentLevel + 1; // one second more for page load
       showWord(words);
       wordInput.value = '';
       score++;
    }

    //if score is-1,display 0 
    if(score === -1){
        scoreDisplay.innerHTML = 0;
    } else{
    //to show the score in the DOM
    scoreDisplay.innerHTML = score;
}
}

//match currentWord to wordInput
function matchWords(){
        if(wordInput.value === currentWord.innerHTML){
            message.innerHTML = 'Correct!!!';
            return true;

        } else{
            message.innerHTML = ' ';
            return false;
      }
}

//pick and show random word
function showWord(words) {
    //generate random array index
   const randIndex = Math.floor(Math.random()* words.length);
   
   //output random word
   currentWord.innerHTML = words[randIndex];
}

//countdown timer
function countdown() {
    //make sure time is not running out
    if(time > 0) {
    //decrement
    time--;
    } else if (time === 0) {
        //game is over
        isPlaying = false;
    }
    //show time
    timeDisplay.innerHTML = time;
}

//check game status
function checkStatus(){
    if(!isPlaying && time === 0){
        message.innerHTML = 'OPPS! GAME OVER!!!';
        score = -1;
    }
}


