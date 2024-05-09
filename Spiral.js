class SpiralApp {
    #PI = Math.PI;
    #TWO_PI = Math.PI * 2;

    /**
     * Canvas object being used. Set this to the canvas needed.
     * @type {HTMLCanvasElement}
     */
    canvas;
    /**
     * Context object being used. Set this to the canvas' context.
     * @type {CanvasRenderingContext2D}
     */
    context;

    constructor(canvas, context) {
        this.canvas = canvas;
        this.context = context;
    }

    /**
     * Sets the canvas and context properties.
     * @param {HTMLCanvasElement} canvas Canvas element to assign.
     * @param {CanvasRenderingContext2D} context Context element to assign.
     */
    setup(canvas, context) {
        this.canvas = canvas;
        this.context = context;
    }

    /**
     * 
     * @param {number} x Spiral x coordinate.
     * @param {number} y Spiral y coordinate.
     * @param {number} coefficient Coefficent of the incriment function.
     * @param {number} degree Degree of the incriment function.
     * @param {number} mainAngle Angle spiral rotates by.
     * @param {number} startAngle Angle spiral starts at relative to `mainAngle`.
     * @param {number} endAngle Angle spiral ends at relative to `mainAngle`.
     */
    monomialHalfCircle(x, y, coefficient, degree = 1, mainAngle = 0, startAngle = 0, endAngle = this.#TWO_PI) {

    }
}

const Spiral = new SpiralApp();