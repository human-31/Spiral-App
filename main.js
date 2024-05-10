function init() {
    canvas.width = 512;
    canvas.height = 512;

    ctx.fillStyle = '#000';

    ctx.fillRect(0, 0, canvas.width, canvas.height);

    Spiral.setup(canvas, ctx);

    ctx.lineWidth = 1;
    ctx.strokeStyle = "#fff2";

    drawGrid(0, 0, canvas.width, canvas.height, 64);

    ctx.lineWidth = 2;
    ctx.strokeStyle = '#08f';

    // Spiral.monomialHalfCircle(256, 256, 8, 1, 0, 0, 16 * Math.PI);
    Spiral.monomialRadial(256, 256, 1, 8);
}

function render() {

}

/* EXECUTE */

init();
render();