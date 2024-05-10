function init() {
    canvas.width = 512;
    canvas.height = 512;

    ctx.fillStyle = '#fff';

    ctx.fillRect(0, 0, canvas.width, canvas.height);

    Spiral.setup(canvas, ctx);

    ctx.strokeStyle = '#00f';

    Spiral.monomialHalfCircle(256, 256, 16, 1, 0, 0, 8 * Math.PI);
}

function render() {

}

/* EXECUTE */

init();
render();