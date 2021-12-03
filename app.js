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

const cupImgId = [
    'blue',
    'rose',
    'purple'
];

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
    const correctCup = getRandomItem(cupImgId);
    handleGuess('blue', correctCup);
}); 

roseButton.addEventListener('click', () => {
    const correctCup = getRandomItem(cupImgId);
    handleGuess('rose', correctCup);
}); 

purpleButton.addEventListener('click', () => {
    const correctCup = getRandomItem(cupImgId);
    handleGuess('purple', correctCup);
}); 

function getRandomItem(arr) {
    const index = Math.floor(Math.random() * arr.length);
    
    return arr[index];
}

function handleGuess(userGuess, correctSpot) {
    resetImg();

    total++;

    const correctImg = document.getElementById(`${correctSpot}`);

    correctImg.src = `./assets/cup_${correctSpot}_duck.png`;

    if (userGuess === correctSpot) {
        wins++;
    }

    displayScore();
}