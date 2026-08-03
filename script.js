const container = document.querySelector("#container");

for (let row = 0; row < 16; row++) {
    let rowDiv = document.createElement("div");
    rowDiv.classList.add("row");

    for (let column = 0; column < 16; column++) {
        let square = document.createElement("div");
        square.classList.add("square")
        square.style.backgroundColor = "rgb(253, 68, 68, 0)";

        square.addEventListener("mouseenter", (e) => {
            let currentColorArray = square.style.backgroundColor.split(",");
            let currentOpacity = parseFloat(currentColorArray[3]);
            if (currentOpacity < 1) currentOpacity += 0.1;
            currentColorArray[3] = currentOpacity + ")";
            square.style.backgroundColor = currentColorArray.join(",");
        });
        
        rowDiv.appendChild(square);
    }

    container.appendChild(rowDiv);
}