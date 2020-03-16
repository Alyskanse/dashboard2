const h = 600, w = 600, m = 20;

const topLine1 = w/3;
const topLine2 = (2*w)/3;
const sideLine1 = h/3;
const sideLine2 = (2*h)/3;

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

function drawBoard() {
    ctx.moveTo(m,sideLine1);
    ctx.lineTo(w-m,sideLine1);
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.moveTo(m,sideLine2);
    ctx.lineTo(w-m,sideLine2);
    ctx.stroke();

    ctx.moveTo(topLine1, m);
    ctx.lineTo(topLine1, h-m);
    ctx.stroke();

    ctx.moveTo(topLine2, m);
    ctx.lineTo(topLine2, h-m);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(110,110, 70, 0, 2*Math.PI);
    ctx.stroke();

    ctx.moveTo(220,220);
    ctx.lineTo(380,380);
    ctx.stroke();

    ctx.moveTo(380, 220);
    ctx.lineTo(220, 380);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(490, 490, 70, 0, Math.PI * 2);
    ctx.stroke();
}

const image = new Image();
image.onload = function() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    ctx.drawImage(image, 10, 10);
    drawBoard();
};
image.src = './images/bg.jpg';