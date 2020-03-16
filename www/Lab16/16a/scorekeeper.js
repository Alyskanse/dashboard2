window.onload = function () {
    var p1Button = document.querySelector("#p1");
    var p2Button = document.getElementById("p2");
    var resetButton = document.getElementById("reset");
    var p1Display = document.querySelector("#p1Display");
    var p2Display = document.querySelector("#p2Display");
    var numInput = document.querySelector("input");
    var winningScoreDisplay = document.querySelector("p span");
    var p1Score = 0;
    var p2Score = 0;
    var gameOver = false;
    var winningScore = 5;

    const winAttr = "btn-success";
    const defAttr = "btn-primary";

    p1Button.addEventListener("click", function () {
        if (!gameOver) {
            p1Score++;
            if (p1Score === winningScore) {
                p1Display.classList.add("winner");
                p1Button.classList.remove(defAttr);
                p1Button.classList.add(winAttr);
                gameOver = true;
            }
            p1Display.textContent = p1Score;
        }
    });
    p2Button.addEventListener("click", function () {
        if (!gameOver) {
            p2Score++;
            if (p2Score === winningScore) {
                p2Display.classList.add("winner");
                p2Button.classList.remove(defAttr);
                p2Button.classList.add(winAttr);
                gameOver = true;
            }
            p2Display.textContent = p2Score;
        }
    });
    resetButton.addEventListener("click", function () {
        reset();
    });

    function reset() {
        p1Score = 0;
        p2Score = 0;
        p1Display.textContent = 0;
        p2Display.textContent = 0;
        p1Display.classList.remove("winner");
        p2Display.classList.remove("winner");

        p1Button.classList.remove(winAttr);
        p1Button.classList.add(defAttr);
        p2Button.classList.remove(winAttr);
        p2Button.classList.add(defAttr);

        gameOver = false;
    }

    numInput.addEventListener("change", function () {
        if (this.value < 0) {
            numInput.value = 0;
        }

        winningScoreDisplay.textContent = this.value;
        winningScore = Number(this.value);
        reset();
    });
};