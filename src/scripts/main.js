class testando{
    constructor(a,b){
        this.a = a
        this.b = b
        this.c = a * b
    }

    soma(){return this.a + this.b + this.c}
}

let testeA = new testando (2, 3)
let testeB = new testando (3, 5)

import {somar} from "./funções"

let resultado = somar(testeA, testeB)
console.log(resultado)