import {loadPage,closeModal, next, prev} from "./funções"

const closeModalBtn = document.querySelector("#close_btn")
closeModalBtn.onclick = closeModal

const carousel = document.querySelectorAll(".carousel-item")
carousel.forEach(item => item.onclick = loadPage)

const noticias = document.querySelectorAll(".noticia")
noticias.forEach(item => item.onclick = loadPage)

const sobre = document.querySelector("#sobre")
sobre.onclick = loadPage