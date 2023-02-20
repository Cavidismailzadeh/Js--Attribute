"use strict"


let models = document.querySelector(".model");

let openIcon = document.querySelector(".open-btn");

let closeIcon = document.querySelector(".model .close-icon");


openIcon.addEventListener("click",function(){
    models.classList.remove("hide-model");
    closeIcon.classList.remove("d-none");
    this.classList.add("d-none")
})


closeIcon.addEventListener("click",function(){
    models.classList.add("hide-model");
    openIcon.classList.remove("d-none");
    this.classList.add("d-none")
})
