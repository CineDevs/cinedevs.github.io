const modal = document.querySelector("#modal_bg")
const carrossel = document.querySelector(".carousel-indicators")
const prevBtn = document.querySelector("#previous_btn")
const nxtBtn = document.querySelector("#next_btn")
let id = "" 
function loadPage() {
    id=this.getAttribute("id")
    setURL()
}

function setURL(){
    let pasta = "filmes"
    let urlPag = `src/posts/HTML/`
    prevBtn.style.visibility = "visible"
    nxtBtn.style.visibility = "visible"
    
    if(id === "sobre"){
        urlPag += `${id}.html`
        prevBtn.style.visibility = "hidden"
        nxtBtn.style.visibility = "hidden"
    } 
    else if(id.includes("s-")){
        pasta = "series"
        urlPag += `${pasta}/${id}.html`
    }
    else urlPag += `${pasta}/${id}.html`
    
    prevBtn.setAttribute("name",`${id}`)
    prevBtn.onclick = prev
    nxtBtn.setAttribute("name",`${id}`)
    nxtBtn.onclick = next
    
    document.body.scrollTop = 0 //Safari
    document.documentElement.scrollTop = 0
    setIframe(urlPag)
}

import {get} from "axios"
function setIframe(url){
    get(url)
    .then(response=>{
        let frame = document.querySelector("#conteudo")
        frame.innerHTML = response.data
        let modalFooter = document.createElement("footer")
        modalFooter.setAttribute("id", "modalFooter")
        modalFooter.innerHTML = "<p>Cinedevs, 2020</p>\
        <p>Todos os direitos reservados aos detentores</p>\
        <p>Icons <strong><a href=\"http://www.freepik.com\">Designed by: macrovector / Freepik</a></strong></p>"
        frame.appendChild(modalFooter)
    })
    .catch(err=>console.warn(err))
    showModal()
}

const showModal= function(){
    modal.setAttribute("class","active")
    carrossel.style.visibility = "hidden"
}
const closeModal = function (){
    let conteudo = document.querySelector("#conteudo")
    modal.removeAttribute("class")
    nxtBtn.style.visibility = "hidden"
    prevBtn.style.visibility = "hidden"
    carrossel.style.visibility = "visible"
    conteudo.innerHTML = ""
}

const next= function(){  
    const titleBtn = this.getAttribute("name")
    const idTxt = titleBtn.substr(0,2)
    
    let idNum = Number(titleBtn.substr(2))
    idNum == 25?idNum = 1:idNum++

    idNum<10?id = `${idTxt}0${idNum}`: id = `${idTxt}${idNum}`
    setURL()
}

const prev = function(){
    const titleBtn = this.getAttribute("name")
    const idTxt = titleBtn.substr(0,2)
    
    let idNum = Number(titleBtn.substr(2))
    idNum == 1?idNum = 25:idNum--

    idNum<10?id = `${idTxt}0${idNum}`: id = `${idTxt}${idNum}`    
    setURL()
}

export{loadPage,closeModal, next, prev}