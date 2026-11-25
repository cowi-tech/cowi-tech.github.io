const canvas = document.querySelector("canvas");
const context2D = canvas.getContext("2d");

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



window.addEventListener("load", function () {
   
   
   renderBackground(canvas, context2D);

   mainLoop(canvas, context2D);
});

function renderBackground(canvas, context) {
    const bgImg = document.getElementsByClassName('bgImg')[0];
    context.drawImage(bgImg, 0, 0);
}

function mainLoop(canvas, context) {
    let phoneNumber = "";
    let lineDepth = 0;
    let 
}