export function somar(...params){
    let soma = 0
    params.map(obj => {
        for(let item in obj){
            soma += obj[item]
        }
    })

    return soma
}

