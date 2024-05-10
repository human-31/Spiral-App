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
     * Generates a spiral using half circles. The radius of each half circle is determined
     * by the function `f(x) = ax^n` where `x` = the current circle in the loop, `a` = `coefficient`, and `n` = `degree`.
     * @param {number} x Spiral x coordinate.
     * @param {number} y Spiral y coordinate.
     * @param {number} coefficient Coefficent of the incriment function.
     * @param {number} degree Degree of the incriment function.
     * @param {number} mainAngle Angle spiral rotates by in radians.
     * @param {number} startAngle Angle spiral starts at relative to `mainAngle` in radians.
     * @param {number} endAngle Angle spiral ends at relative to `mainAngle` in radians.
     */
    monomialHalfCircle(x, y, coefficient, degree = 1, mainAngle = 0, startAngle = 0, endAngle = this.#TWO_PI) {
        this.context.save();
        this.context.beginPath();

        const startIndex = Math.ceil(startAngle / this.#PI);
        const endIndex = Math.ceil(endAngle / this.#PI);
        const f = (x) => { return coefficient * Math.pow(x, degree) };

        console.log(endIndex);

        let centerOffset = 0;
        

        for (let i = 1; i <= endIndex; i++) {
            const radius = f(i);
            const parity = i % 2 === 0 ? 1 : -1;

            centerOffset += -parity * f(i - 1) + parity * radius;

            const centerX = centerOffset * Math.cos(mainAngle) + x;
            const centerY = centerOffset * Math.sin(mainAngle) + y;

            if (i < startIndex) continue;

            if (parity === -1) {
                if (i === startIndex) {
                    this.context.arc(centerX, centerY, radius,
                        mainAngle + startAngle % this.#TWO_PI, mainAngle + this.#PI);
                } else if (i === endIndex) {
                    this.context.arc(centerX, centerY, radius,
                        mainAngle, mainAngle + endAngle % this.#TWO_PI);
                } else {
                    this.context.arc(centerX, centerY, radius,
                        mainAngle, mainAngle + this.#PI);
                }
            } else {
                if (i === startIndex) {
                    this.context.arc(centerX, centerY, radius,
                        mainAngle + this.#PI + startAngle % this.#TWO_PI, mainAngle + this.#TWO_PI);
                } else if (i === endIndex) {
                    this.context.arc(centerX, centerY, radius,
                        mainAngle + this.#PI, mainAngle + this.#PI + (endAngle - this.#PI) % this.#TWO_PI);
                        console.log(i);
                } else {
                    this.context.arc(centerX, centerY, radius,
                        mainAngle + this.#PI, mainAngle + this.#TWO_PI);
                }
            }
        }

        this.context.stroke();
        this.context.restore();
    }

    /**
     * Generates a spiral using the radial function `r = aθ^n`
     * where `r` = distance from origin, `a` = `coefficient`, and `n` = `degree`.
     * The spiral is constructed from lines, and the accuracy of the curve is controlled by `stepSize`.
     * @param {number} x Spiral x coordinate.
     * @param {number} y Spiral y coordinate.
     * @param {number} stepSize How much to increment the angle for the next point.
     * @param {number} coefficient Coefficent of the incriment function.
     * @param {number} degree Degree of the incriment function.
     * @param {number} mainAngle Angle spiral rotates by in radians.
     * @param {number} startAngle Angle spiral starts at relative to `mainAngle` in radians.
     * @param {number} endAngle Angle spiral ends at relative to `mainAngle` in radians.
     */
    monomialRadial(x, y, stepSize, coefficient, degree = 1, mainAngle = 0, startAngle = 0, endAngle = this.#TWO_PI) {
        this.context.save();
        this.context.beginPath();

        const f = (theta) => { return coefficient * Math.pow(theta, degree) };

        const moveR = f(startAngle);
        const moveX = moveR * Math.cos(startAngle + mainAngle) + x;
        const moveY = moveR * Math.sin(startAngle + mainAngle) + y;

        this.context.lineTo(moveX, moveY);
        
        for (let theta = startAngle; theta < endAngle; theta += stepSize) {
            const r = f(theta);
            const pointX = r * Math.cos(theta + mainAngle) + x;
            const pointY = r * Math.sin(theta + mainAngle) + y;

            this.context.lineTo(pointX, pointY);
        }

        const r = f(endAngle);
        const pointX = r * Math.cos(endAngle + mainAngle) + x;
        const pointY = r * Math.sin(endAngle + mainAngle) + y;

        this.context.lineTo(pointX, pointY);

        this.context.stroke();
        this.context.restore();
    }
}

const Spiral = new SpiralApp();