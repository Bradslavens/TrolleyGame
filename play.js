const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');
const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');

let characterX = canvas.width / 2;
const characterY = canvas.height - 50;
const characterWidth = 30;
const characterHeight = 30;
const trackWidth = 20;
const trackSpacing = canvas.width / 3; // Adjusted for 1/3 spacing
let trackOffset = 0;
const scrollSpeed = 2;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawScene();
}

function drawTrack(x) {
    context.fillStyle = '#6f4e37'; // Brown for railroad tracks
    for (let y = -canvas.height; y < canvas.height * 2; y += 40) {
        context.fillRect(x - trackWidth / 2, y + trackOffset, trackWidth, 10);
    }
}

function drawScene() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    // Draw three tracks
    drawTrack(canvas.width / 3); // Left track, 1/3 from left side
    drawTrack(canvas.width / 2); // Middle track, center of the canvas
    drawTrack(2 * canvas.width / 3); // Right track, 1/3 from right side
    // Draw character
    context.fillStyle = '#f2eecb'; // Light guacamole color
    context.fillRect(characterX, characterY, characterWidth, characterHeight);
}

function updateScene() {
    trackOffset += scrollSpeed;
    if (trackOffset >= 40) {
        trackOffset = 0;
    }
    drawScene();
    requestAnimationFrame(updateScene);
}

function moveLeft() {
    characterX -= 10;
    if (characterX < 0) {
        characterX = 0;
    }
    drawScene();
}

function moveRight() {
    characterX += 10;
    if (characterX + characterWidth > canvas.width) {
        characterX = canvas.width - characterWidth;
    }
    drawScene();
}

leftButton.addEventListener('click', moveLeft);
rightButton.addEventListener('click', moveRight);

resizeCanvas();
window.addEventListener('resize', resizeCanvas);
requestAnimationFrame(updateScene);
