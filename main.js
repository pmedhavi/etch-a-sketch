document.addEventListener("DOMContentLoaded", function () {
    let btnPopup = document.querySelector("#popup");
    let blackBtn = document.querySelector("#black");
    let randomBtn = document.querySelector("#random");
    let resetBtn = document.querySelector("#reset");
    let board = document.querySelector(".board");
    let currentColor = "black"; // Default color

    btnPopup.addEventListener("click", function () {
        let size = getSize();
        if (size) {
            createBoard(size);
        }
    });

    blackBtn.addEventListener("click", function () {
        currentColor = "black";
    });

    randomBtn.addEventListener("click", function () {
        currentColor = "random";
    });

    resetBtn.addEventListener("click", function () {
        board.innerHTML = ""; // Clear the board
    });

    function createBoard(size) {
        board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        board.innerHTML = "";

        for (let i = 0; i < size * size; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");

            cell.addEventListener("mouseover", function () {
                if (currentColor === "random") {
                    cell.style.backgroundColor = getRandomColor();
                } else {
                    cell.style.backgroundColor = currentColor;
                }
            });

            board.appendChild(cell);
        }
    }

    function getSize() {
        let input = prompt("What will be the size of the board?");
        let message = document.querySelector("#message");

        if (input === "" || isNaN(input)) {
            message.innerHTML = "Please provide a valid number.";
            return null;
        } else if (input < 1 || input > 100) {
            message.innerHTML = "Please provide a number between 1 and 100.";
            return null;
        } else {
            message.innerHTML = "Now go on!";
            return input;
        }
    }

    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }
});