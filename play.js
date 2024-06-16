const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');
const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');

let characterX = canvas.width / 2;
const characterY = canvas.height - 50;
const characterWidth = 30;
const characterHeight = 30;

// Adjust canvas size
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawCharacter();
}

// Draw character function
function drawCharacter() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = '#f2eecb'; // Light guacamole color
    context.fillRect(characterX, characterY, characterWidth, characterHeight);
}

// Move character left
function moveLeft() {
    characterX -= 10;
    if (characterX < 0) {
        characterX = 0;
    }
    drawCharacter();
}

// Move character right
function moveRight() {
    characterX += 10;
    if (characterX + characterWidth > canvas.width) {
        characterX = canvas.width - characterWidth;
    }
    drawCharacter();
}

// Event listeners for buttons
leftButton.addEventListener('click', moveLeft);
rightButton.addEventListener('click', moveRight);

// Initialize the canvas size
resizeCanvas();

// Redraw on resize
window.addEventListener('resize', resizeCanvas);
