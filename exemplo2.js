// | Exemplo 02 | Descrição |
// | --- | --- |
// | `For/Break/Continue` |

// Utilize a estrutura de repetição for para imprimir no console  conforme instruções: 

//     a) números de 1 a 50  
console.log(`olá, vamos contar de 1 a 50?`)
for (let numero = 1; numero <= 50; numero = numero + 1) {
    console.log(numero)
}
console.log(`que interessante!`)

//     b) quando chegar no número 25 interrompa a instrução e pare o loop 
console.log(`olá, vamos contar de 1 a 50?`)
for (let numero = 1; numero <= 50; numero = numero + 1) {
    console.log(numero)
    if(numero === 25) {
      break
    
    }
}  

console.log(`parou no 25`)
    
//     c) quando chegar no número 10 pule a instrução|

let n = 1

while(n < 15) {
  n += 1
  
  if(n === 10) {
    console.log(" ")
    continue
  }

  console.log("Testando continue " + n)
}
