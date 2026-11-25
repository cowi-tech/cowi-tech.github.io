const canvas = document.querySelector("canvas");
const context2D = canvas.getContext("2d");

const width = 630;
const height = 480;

let activeNumbers = [];

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


class Number {
    constructor(initX) {
        this.number = random(0, 9);
        this.xPos = initX;
        this.yPos = 440;
    }

    draw() {
        context2D.font = "30px Akashi";
        context2D.textAlign = "center";
        context2D.textBaseline = "top";
        context2D.fillStyle = "black";
        context2D.fillText(this.number, this.xPos, this.yPos);
    }

    update() {
        this.xPos += 3;
        if (this.xPos >= width + 30) {
            this.xPos = 0;
            this.number = random(0, 9);
        }
    }
}

function generateNumbers() {
    let currX = 0;
    while (currX <= 600) {
        const num = new Number(currX);
        activeNumbers.push(num);
        currX += 60;
    }
}

function renderBackground() {
    const bgImg = document.getElementsByClassName('bgImg')[0];
    context2D.drawImage(bgImg, 0, 0);
}

generateNumbers();

function mainLoop() {
    renderBackground();

    for (const num of activeNumbers) {
        num.draw();
        num.update();
    }

    requestAnimationFrame(mainLoop);
}

mainLoop();