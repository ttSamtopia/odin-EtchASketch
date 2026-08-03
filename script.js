const container = document.querySelector("#container");

for (let row = 0; row < 16; row++) {
    let rowDiv = document.createElement("div");
    rowDiv.classList.add("row");

    for (let column = 0; column < 16; column++) {
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

    container.appendChild(rowDiv);
}