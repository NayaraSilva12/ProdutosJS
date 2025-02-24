
const produto =  document.getElementById("produto");
const quantidade =  document.getElementById("quantidade");
const preco =  document.getElementById("preco");
const precototal =  document.getElementById("precototal");

let dados = [];

function cadastrar() {
    const produto = produto.value
    const quantidade = quantidade.int
    const preco = preco.float
    const precototal = precototal.float

    dados.push(produto, quantidade, preco, precototal)

    console.log(dados)

}

