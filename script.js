const CONTAINER = document.querySelector("#container");
const BUTTON = document.querySelector("button");

function createGrid (gridSize = 16) {
    CONTAINER.innerHTML = "";

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

BUTTON.addEventListener("click", (e) => {
    let gridSize = parseInt(prompt("How big do you want the grid to be? (1 - 100)"));
    if (gridSize < 1) alert("Size is too small");
    else if (gridSize > 100) alert("Size is too big");
    else createGrid(gridSize);
})