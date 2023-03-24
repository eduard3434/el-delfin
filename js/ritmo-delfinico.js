"use strict"



function crearCirculo(){
    var div = document.createElement("div");
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.background = "red";
    div.style.borderRadius = "50%";
    div.style.position = "absolute";
    div.style.animation="run 4s linear 1";
    div.classList.add("fancy-circle");

    document.getElementById("dolphin-house").appendChild(div);

}


function removeAnimation(){
    const e = document.querySelector(".fancy-circle");
    e.remove();
}

/* var1 = setInterval(function(){
    crearCirculo();
}, 500); */

