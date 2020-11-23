function loadPage() {
    const div = this
    const url = setURL(div)
    setIframe(url)
}

function setURL(div){
    let id = div.getAttribute("id")
    let pasta = "filmes"
    let urlPag = `src/posts/HTML/`
    
    if(id === "sobre") urlPag += `${id}.html`
    else if(id.includes("s-")){
        pasta = "series"
        urlPag += `${pasta}/${id}.html`
    }
    else urlPag += `${pasta}/${id}.html`
    
    return urlPag
}

import {get} from "axios"
function setIframe(url){
    get(url)
    .then(response=>{
        let frame = document.querySelector("#conteudo > iframe")
        frame.setAttribute('src', url)
    })
    .catch(err=>console.warn(err))
}
export{loadPage}