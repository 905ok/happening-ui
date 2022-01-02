const NORMAL_COLOR = [10,227,86,1];
const HIGHLIGHTED = [235,255,113,1];
const LOWER_LIMIT = -38;
const OPTIONS_WIDTH = 100;
const OPTIONS_HEIGHT = 19;


class Option {
    constructor(index, value) {
        this.index = index;
        this.value = value;
        this.color = NORMAL_COLOR;

        return [
            new rectangle({
                x1: 0 - OPTIONS_WIDTH / 2,
                y1: LOWER_LIMIT - OPTIONS_HEIGHT - OPTIONS_HEIGHT * this.index,
                x2: OPTIONS_WIDTH / 2,
                y2: LOWER_LIMIT - OPTIONS_HEIGHT * this.index,
                rgba: this.color,
                filled: true,
            }),
            new text({
                x: 0 - OPTIONS_WIDTH / 2,
                y: LOWER_LIMIT - OPTIONS_HEIGHT / 2 - OPTIONS_HEIGHT * this.index,
                content: this.value,
                font: enumFont.black,
                align: enumAlign.left,
            })
        ];
    }
}


class Data {
    constructor(data) {
        for (let k in data) this[k] = data[k];
    }
}

class rectangle extends Data {}
class text extends Data {}


const resultData = { rectangles: [], texts: [] };
const select = [
    new Option(0, 'first'),
    new Option(1, 'second'),
    new Option(2, 'third'),
    new Option(3, 'fourth'),
    new Option(4, 'fifth'),
];

let index = 0;
let selectPointer = select[index];

function update(my) {
    selectPointer[0].rgba = HIGHLIGHTED;

    select.forEach(v => insertData(v));

    if (jumped(my)) index = index+1 == 5 ? 0 : index+1;

    return resultData;
}


function insertData(data) {
    Array.isArray(data) ?
        data.forEach(v => resultData[v.constructor.name+'s'].push(v))
        : resultData[data.constructor.name+'s'].push(data);
}


function jumped(my) {
    return false;
}
