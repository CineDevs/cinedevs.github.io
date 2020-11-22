function loadPage() {
    const div = this
    const url = setURL(div)
    setIframe(url)
}

function setURL(div){
    let id = div.getAttribute("id")
    let pasta = "filmes"
    let urlPag = `src/posts/JSON/`
    
    if(id === "sobre") urlPag += `${id}.json`
    else if(id.includes("s-")){
        pasta = "series"
        urlPag += `${pasta}/${id}.json`
    }
    else urlPag += `${pasta}/${id}.json`
    
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