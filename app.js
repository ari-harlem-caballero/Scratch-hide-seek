// import functions and grab DOM elements
const blueButton = document.getElementById('blue-button');
const roseButton = document.getElementById('rose-button');
const purpleButton = document.getElementById('purple-button');
const blueImg = document.getElementById('blue');
const roseImg = document.getElementById('rose');
const purpleImg = document.getElementById('purple');
const winsElem = document.getElementById('wins');
const lossElem = document.getElementById('loss');
const totalElem = document.getElementById('total');

// let state
let wins = 0;
let loss = 0;
let total = 0;

function resetImg() {
    blueImg.src = './assets/cup_blue_start.png';
    roseImg.src = './assets/cup_rose_start.png';
    purpleImg.src = './assets/cup_purple_start.png';
}

// set event listeners
blueButton.addEventListener('click', () => {

    resetImg();

    total++;

    const randomCupNum = Math.floor(Math.random() * 3);
    
    if (randomCupNum === 0) {
        wins++;

        blueImg.src = './assets/cup_blue_duck.png';

    } else if (randomCupNum === 1) {
        roseImg.src = './assets/cup_rose_duck.png';

    } else {
        purpleImg.src = './assets/cup_purple_duck.png';
    }
}); 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
