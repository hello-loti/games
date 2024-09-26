const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const grid = 20;
const canvasSize = 400;

let snake = [{ x: 200, y: 200 }];
let food = { x: 100, y: 100 };
let dx = grid;
let dy = 0;
let score = 0;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw snake
    ctx.fillStyle = 'green';
    snake.forEach(part => ctx.fillRect(part.x, part.y, grid, grid));
    
    // Draw food
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, grid, grid);
    
    // Draw score
    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.fillText('Score: ' + score, 10, 20);
}

function update() {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    
    if (head.x === food.x && head.y === food.y) {
        score++;
        food = { x: Math.floor(Math.random() * canvasSize / grid) * grid, y: Math.floor(Math.random() * canvasSize / grid) * grid };
    } else {
        snake.pop();
    }
    
    snake.unshift(head);
    
    // Check for collisions
    if (head.x < 0 || head.x >= canvasSize || head.y < 0 || head.y >= canvasSize || snake.some(part => part.x === head.x && part.y === head.y)) {
        clearInterval(gameLoop);
        alert('Game Over');
    }
}

function changeDirection(event) {
    switch (event.key) {
        case 'ArrowUp':
            if (dy === 0) { dx = 0; dy = -grid; }
            break;
        case 'ArrowDown':
            if (dy === 0) { dx = 0; dy = grid; }
            break;
        case 'ArrowLeft':
            if (dx === 0) { dx = -grid; dy = 0; }
            break;
        case 'ArrowRight':
            if (dx === 0) { dx = grid; dy = 0; }
            break;
    }
}

document.addEventListener('keydown', changeDirection);

const gameLoop = setInterval(() => {
    update();
    draw();
}, 100);
