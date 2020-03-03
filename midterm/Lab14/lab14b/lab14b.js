let state = "IDLE";

function changeState(newState) {
    document.getElementById("print").innerHTML = newState;
}

function getUserInput () {
    let cmd = 'next';
    do {
        cmd = prompt(`Enter a command (current = ${state}):`, 'next');

        switch (state)  {
            case "IDLE":
            {
                if (cmd === "run") {
                    state ="S1";
                    changeState('S1');
                }
                break;
            }
            case "S1":
            {
                if (cmd === "next") {
                    state = "S2";
                    changeState('S2');
                } else if (cmd === "skip") {
                    state = "S3";
                    changeState('S3');
                } else if (cmd === "prev") {
                    state = "S4";
                    changeState('S4');
                }
                break;
            }
            case 'S2':
            {
                if (cmd === "next") {
                    state = 'S3';
                    changeState('S3');
                }
                break;
            }
            case 'S3':
            {
                if (cmd === "next") {
                    state = 'S4';
                    changeState('S4');
                } else if (cmd === 'home') {
                    state = 'IDLE';
                    changeState('IDLE');
                }
                break;
            }
            case 'S4':
            {
                if (cmd === 'next') {
                    state = 'S1';
                    changeState('S1');
                }
            }
        }
        //cmd = getUserInput();
    } while (cmd !== "exit" && cmd !== "quit");
}

