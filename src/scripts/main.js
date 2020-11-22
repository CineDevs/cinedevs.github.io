import {loadPage} from "./funções"
let modal = document.querySelector('#modal_bg')

let carousel = document.querySelectorAll(".carousel-item")
carousel.forEach(item => item.onclick=loadPage)

