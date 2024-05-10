/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas-1');
const ctx = canvas.getContext('2d');

function drawGrid(x, y, width, height, rows, columns = rows) {
    ctx.save();
    ctx.beginPath();

    const cellWidth = width / columns;
    const cellHeight = height / rows;

    for (let i = 1; i < rows; i++) {
        ctx.moveTo(x, y + i * cellHeight);
        ctx.lineTo(x + width, y + i * cellHeight);
    }

    for (let i = 1; i < columns; i++) {
        ctx.moveTo(x + i * cellWidth, y);
        ctx.lineTo(x + i * cellHeight, y + height);
    }

    ctx.stroke();
    ctx.restore();
}