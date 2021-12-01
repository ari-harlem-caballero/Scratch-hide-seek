// import functions and grab DOM elements
const blueButton = document.getElementById('blue-button');
const roseButton = document.getElementById('rose-button');
const purpleButton = document.getElementById('purple-button');
const blueImg = document.getElementById('blue');
const roseImg = document.getElementById('rose');
const purpleImg = document.getElementById('purple');
const winsElem = document.getElementById('win');
const lossElem = document.getElementById('loss');
const totalElem = document.getElementById('total');

// let state
let wins = 0;
// let loss = 0;
let total = 0;

function resetImg() {
    blueImg.src = './assets/cup_blue_start.png';
    roseImg.src = './assets/cup_rose_start.png';
    purpleImg.src = './assets/cup_purple_start.png';
}

function displayScore() {
    winsElem.textContent = wins;
    lossElem.textContent = total - wins;
    totalElem.textContent = total;
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

    displayScore();
}); 

roseButton.addEventListener('click', () => {

    resetImg();

    total++;

    const randomCupNum = Math.floor(Math.random() * 3);
    
    if (randomCupNum === 1) {
        wins++;

        roseImg.src = './assets/cup_rose_duck.png';

    } else if (randomCupNum === 0) {
        blueImg.src = './assets/cup_blue_duck.png';

    } else {
        purpleImg.src = './assets/cup_purple_duck.png';
    }

    displayScore();
}); 

purpleButton.addEventListener('click', () => {

    resetImg();

    total++;

    const randomCupNum = Math.floor(Math.random() * 3);
    
    if (randomCupNum === 2) {
        wins++;

        purpleImg.src = './assets/cup_purple_duck.png';

    } else if (randomCupNum === 0) {
        blueImg.src = './assets/cup_blue_duck.png';

    } else {
        roseImg.src = './assets/cup_rose_duck.png';
    }

    displayScore();
}); 
