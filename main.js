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

    Spiral.monomialHalfCircle(256, 256, 16, 1, 0, 0, 16 * Math.PI);

    ctx.strokeStyle = '#f08';

    Spiral.monomialRadial(256, 256, 0.1, 16 / Math.PI, 1, 0, 0, 16 * Math.PI);
}

function render() {

}

/* EXECUTE */

init();
render();