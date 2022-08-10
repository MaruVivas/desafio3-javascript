// Modifica la función original

        const ele = document.getElementById("ele1");

        const ele2 = document.getElementById("ele2");

        ele.addEventListener("click", (event) => pintar(event, "yellow"));

        ele2.addEventListener("click", (event) => pintar(event));
   
        function pintar(event, color = "green"){
            event.target.style.backgroundColor = color;
            }