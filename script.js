const CONTAINER = document.querySelector("#container");

function createGrid (gridSize = 16) {
    for (let row = 0; row < gridSize; row++) {
        let rowDiv = document.createElement("div");
        rowDiv.classList.add("row");

        for (let column = 0; column < gridSize; column++) {
            let square = document.createElement("div");
            square.classList.add("square")
            let opacity = 0;
            square.style.backgroundColor = `rgb(253, 68, 68, ${opacity})`;

            square.addEventListener("mouseenter", (e) => {
                if (opacity < 1) opacity += 0.1;
                square.style.backgroundColor = `rgb(253, 68, 68, ${opacity})`;
            });
            
            rowDiv.appendChild(square);
        }

        CONTAINER.appendChild(rowDiv);
    }
}

createGrid()