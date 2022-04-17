// Exemplo 06
// `Fatorial` 
// Crie uma função que irá receber um número e retornar o fatorial dele. 
// por exemplo:  3! = 3 * 2 * 1 // 6 

function fatora(n) {
    for (let x = n - 1; x > 0; x--) {
        n *= x
   }
   console.log(`o fatorial dá ${n}`)
  
}

console.log(fatora(5)) // 120
