let container = document.querySelector("#container");

function darken(box) {
    let colour = box.style.backgroundColor;
    let darkness = Number(colour.match(/\d+(.\d+)?/g)[3]);
    if (darkness < 1) darkness += 0.1;
    box.style.backgroundColor = `rgba(0,0,0,${darkness})`;
}

function generate(squares) {
    while (container.lastChild) {
        container.removeChild(container.lastChild);
    }
    container.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${squares}, 1fr)`;
    for (let i = 0; i < squares ** 2; i++) {
        let box = document.createElement("div");
        box.style.backgroundColor = "rgba(0,0,0,0)";
        box.style.border = "1px solid #EEE";
        box.addEventListener("mouseover", () => darken(box));
        container.appendChild(box);
    }
}

document.querySelector('#reset-button').addEventListener("click", () => generate(prompt("Enter size of sketchpad:")));

generate(16);