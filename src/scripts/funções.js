/*inicio loadPage*/
import {get} from "axios"
function loadPage(){
    let id = this.getAttribute("id")
    let urlSerie = `src/posts/JSON/series/${id}.JSON`

    get(urlSerie)
    .then(response=>console.log(response.data))
    .catch(err=>console.warn(err))
}
/*fim loadPage*/
export{loadPage}