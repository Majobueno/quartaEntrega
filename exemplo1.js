// | Exemplo 01 | Descrição |
// | --- | --- |
// | `criar e acessar valores (objeto e array` |Crie objetos e arrays e acesses os valors



//     a) array lista de compras 
let listaDeCompras = ['sabão', 'farinha', 'esponja', 'arroz']

//     b) objeto livro (nome, autora, pagina, anoPublicao, jaLeu)
//     c) Criar um array com varios objetos de livros
const livro = [{ 
    nome: 'A flor da Vida',
    autora: 'Clariana',
    paginas: 587,
    anoPublicacao: 1968,
    jaLeu: true
},
{ 
    nome: 'A flor da morte',
    autora: 'Anjo de Luz',
    paginas: 5,
    anoPublicacao: 1959,
    jaLeu: false
},
{ 
    nome: 'A flor portal',
    autora: 'anonimo',
    paginas: 168,
    anoPublicacao: 2018,
    jaLeu: true
}]

//posso fazer tb um array das propriedades do objeto
const listandoLivro = [livro[0].nome, livro[0].autora, livro[0].paginas]


//experimentando impressões
console.log(listaDeCompras[0])
console.log(livro[2])
console.log(listandoLivro[2, 3])

