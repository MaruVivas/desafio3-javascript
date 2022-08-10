

document.addEventListener("keydown", (event) => {
    if (event.key === "n") {
        colorElegido = "black";
    } else if (event.key === "m") {
        colorElegido = "purple";
    } else if (event.key === "r") {
        colorElegido = "pink";
    } });

    const pintar = (event) => 
        (event.target.style.backgroundColor = colorElegido);
    

const div1 = document.getElementById("div1");
div1.addEventListener("click", (event) => pintar(event));

const div2 = document.getElementById("div2");
div2.addEventListener("click", (event) => pintar(event));

const div3 = document.getElementById("div3");
div3.addEventListener("click", (event) => pintar(event));

const div4 = document.getElementById("div4");
div4.addEventListener("click", (event) => pintar(event));

    