const container = document.querySelector("#container");

for (let row = 0; row < 16; row++) {
    let row = document.createElement("div");
    row.classList.toggle("row");

    for (let column = 0; column < 16; column++) {
        let square = document.createElement("div");
        square.classList.toggle("square")
        row.appendChild(square);
    }

    container.appendChild(row);
}