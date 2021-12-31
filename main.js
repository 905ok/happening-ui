const BG_COLOR = [164,231,19,1];
const FG_COLOR = [54,61,36,1];
const MAIN_WIN_BORDER_COLOR = [41,43,61,1];

const rectangles = [];

function update(my) {
    rectangles.push(...new Box(90, 70));

    return {
        rectangles
    };
}


function Box(width, height) {
    this.width = width;
    this.height = height;
    const x1 = 0 - this.width / 2;
    const x2 = this.width / 2;
    const y1 = -58 - this.height;
    const y2 = -58;
    const borderThickness = 1;
    return [
        // rectangle
        {
            x1, y1, x2, y2,
            rgba: BG_COLOR,
            filled: true
        },
        
        // border
        {
            x1: (x1 - borderThickness),
            y1: (y1 - borderThickness),
            x2: (x2 + borderThickness),
            y2: (y2 + borderThickness),
            thickness: borderThickness,
            rgba: MAIN_WIN_BORDER_COLOR,
            filled: false

        },
    ];
}
