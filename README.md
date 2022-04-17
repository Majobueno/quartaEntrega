<h3 align='center'><b> Lógica aplicada - Estrutura de repetição, arrays, métodos e objetos </b></h3>

##### **Semana 4 – Resolução de Problemas/Lógica aplicada e JavaScript (sintaxe básica)**
<p align=center> ----------------------------------------------------------------------</P>

<h2> <font color: #800080> <i> O que aprendi? </i></font></h2> 

1. [Estrutura de repetição](#loops)
2. [Objetos](#objetos)
3. [Arrays](#arrays)
4. [Métodos de iteração](#métodos-de-iteração)
5. [Ferramentas da semana: readline e nodemon](#readline-e-nodemon)  
<br>

---

## Loops

<i>Loop, laço, iteração ou estrutura de repetição. </i>

Estabelecemos um início e um padrão (conjunto de comandos) a ser repetido pelo nosso sistema, seguindo as condições que estabelecermos ou os limites. 

ao invés de dar um mesmo comando para imprimir dezenas de vezes,<br>
ou somar muitas vezes, podemos automatizar esse processo <br>
delimitando um conjunto de comando a ser repetidos<br>

  
há, basicamente, três maneiras: <i>for</i>, <i>while</i> e também com o <i>do...while</i>.

por exemplo, para que máquina conte de 2 em 2:<br>

*for*  

<font size=10>for é a estrutura de repetição com variavél de controle, <br>
a gente usa quando temos um início e um fim bem definidos </font>

```javascript
console.log('conte até 28, de 2 em 2')
for(let i = 0; i <= 28; i += 2) {
  console.log(`${i}`)
}
console.log('agradecida')

```
*While*

<font size=10>while faz o teste lógico no início e sendo verdadeiro ele executa o bloco de código</font>

```javascript
console.log('some 2 com 2 até 32')
let num = 2; 
while (num <= 32) {
    console.log(`com mais 2 dá ${num}`)  
    num += 2
}       
console.log('pronto')

```
*Do...While*

<font size=10>do...while primeiro executa o bloco e depois faz o teste lógico,<br>
 garantindo que a instrução será executada pelo menos 1 vez. </font>

```javascript
cconsole.log('vamos pegar 1 e somar 2 até 15')
let com = 1;
do{
    com += 2
    console.log(`somei 2 e deu ${com}`) 
} while(com <= 13)
console.log('já deu')

```

**Comandos especiais**
    1. break: podemos encerrar uma instrução
    2. continue: podemos pular uma instrução

```javascript
console.log(`contagem regressiva do 10 e parando no 3`)
for(let y = 10; y > 0; y--) {

  console.log(y);

  if(y === 3) {
    break;
  }  
}

console.log("parou no 3");

// e pulando

let x = 1;
while(x < 10) {
    console.log(x);
    x++
  if(x === 6 || x === 8) {
    console.log("pulo esse");
    continue;
  }
}
  
```
<br>

===

## Objetos

Objeto funciona como um dado que contém uma coleção de <i>propriedades</i> organizadas em pares de **chave**:*valor*, sendo o *valor* qualquer tipo de dado (número, texto, função ou até mesmo outro objeto)



```javascript
const pet = {
  nome: 'pipoca',
  raça: 'VL',
  especie: 'cachorro'
  idade: 5,
  paraAdocao: true
}
```
outra maneira de escrever é com new Object()

```javascript
const dog = new Object()

dog.nome = 'Ariel';
dog.idade = 2;
dog.raca = 'VL';

```

### Acessando valores

```javascript
const pet = {
  nome: 'pipoca',
  raca: 'VL',
  especie: 'cachorro'
  idade: 5,
  paraAdocao: true
};

// Notação de ponto

console.log(pet.nome);  
console.log(pet.idade);  
console.log(pet.raca); 

// Notação de colchetes (ou índice)

console.log(pet['nome']) 
console.log(pet['idade']) 
console.log(pet['paraAdocao']) 

```

| Alterando propriedades

```
pet.nome = 'Bolinha'

```

Adicionando propriedades

```
pet.peso = '6,9kg'
```

Deletando propriedades

```
delete pet.peso
```

### usar Date

```js
const dia = new Date()

console.log(dia) // data atual 2022-04-18T07:23:38.250Z

const d = dia.getDate()
const m = dia.getMonth()
const a = dia.getFullYear()

console.log(d, m, a) 

// para data sair como escrevemos em portugues
const dataEmPortugues = dia.toLocaleDateString('pt-BR')
console.log(dataEmPortugues) 

```
MDN: [date](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date),
[toLocaleDateString](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString)

## Arrays

é a estrutura de dados mais simples possível,<br>
armazena um conjunto de dados em uma lista e pode ser guardado (atribuído) em uma **variável** <br>
entre colchetes e separados por vírgula. assim:<br>

```javascript
const alunasReprograma = ['Agnes', 'Andreza', 'Lays', 'Elijane', ...];

```
ou assim, usando *new Array()*:<br>
  
```javascript
const alunasReprograma = new Array('Agnes', 'Andreza', 'Lays', 'Elijane', ...);

```

Para acessar o valor, use a notação de colchetes e informe a posição que deseja acessar, lembrando que a primeira posição é zero: [0].

```javascript
const alunasReprograma = ['Agnes', 'Andreza', 'Lays', 'Elijane', ...];

console.log(alunasReprograma[0]) // Agnes
console.log(alunasReprograma[1]) // Andreza
...
```
===

| Exemplo 01 | Descrição |
| --- | --- |
| `criar e acessar valores (objeto e array` |Crie objetos e arrays e acesses os valores
    a) array lista de compras 
    b) objeto livro (nome, autora, pagina, anoPublicao, jaLeu)
    c) Criar um array com varios objetos de livros

| Exemplo 02 | Descrição |
| --- | --- |
| `For/Break/Continue` | Utilize a estrutura de repetição for para imprimir no console  conforme instruções: 
    a) números de 1 a 50  
    b) quando chegar no número 25 interrompa a instrução e pare o loop 
    c) quando chegar no número 10 pule a instrução|

| Exemplo 03 | Descrição |
| --- | --- |
| `10 em 10` | Imprima na tela a partir de 20 e depois de 10 em 10 até o 100, mas em vez dos numeros 60 e 90 imprima a palavra "CONTINUE".|
    
| Exemplo 04 | Descrição |
| --- | --- |
| `Tabuada` | Faça um programa que dado um número, imprime no (console.log) a tabuada do mesmo de 1 a 10. |

| Exemplo 05 | Descrição |
| --- | --- |
| `Pares` |Imprima na tela os números pares existentes entre 0 e 100..|

| Exemplo 06 | Descrição |
| --- | --- |
| `Fatorial` | Crie uma função que irá receber um número e retornar o fatorial dele. por exemplo:  3! = 3 * 2 * 1 // 6 |
