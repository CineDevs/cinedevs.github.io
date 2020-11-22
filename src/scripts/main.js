import {loadPage} from "./funções"

let carousel = document.querySelectorAll(".carousel-item")
carousel.forEach(item => item.onclick=loadPage)

let sobre = document.querySelector("#sobre")
sobre.onclick = loadPage

