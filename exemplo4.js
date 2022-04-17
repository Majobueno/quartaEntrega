//  Exemplo 04 
//  Descrição
// 
//  `Tabuada` | Faça um programa que dado um número, imprime no (console.log) a tabuada do mesmo de 1 a 10. |

function fazTabuada(n) {
let x = 0 

do {
    x++,
    mult = x * n,
    console.log(mult)
}
    while (x < 10)

}

console.log(fazTabuada(7)) //mostra do 7 ao 70 os resultados

function fazerTabuada(n) {
for (let x = 1; x <= 10; x++) {
    let mult = n * x
    console.log(mult)
}
}
    console.log(fazerTabuada(8)) // deve mostrar do 8 ao 80