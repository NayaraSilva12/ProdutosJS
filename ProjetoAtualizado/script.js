
// Obtendo o valor dos inputs que foram preenchidos no HTML e setando os valores nas variáveis
const produtoEntrada =  document.getElementById("produto");
const quantidadeEntrada =  document.getElementById("quantidade");
const precoEntrada =  document.getElementById("preco");
const precototalEntrada =  document.getElementById("precototal");

// Declarando a lista de produtos que será iterada, exibindo na tela, cadastrando produtos e etc...
let dados = []

// Assinatura do método cadastrar = declaração do método
function cadastrar() {

    // Criando objeto que será adicionado na lista, os valores das propriedades são as variáveis que nós setamos o valor lá em cima
    const registro = {
        produto: produtoEntrada.value,
        quantidade: quantidadeEntrada.value,
        preco: precoEntrada.value,
        precoTotal: precototalEntrada.value
    };

    // Adicionando o objeto que foi montado em cima na lista dados
    dados.push(registro);

    // Obtendo os ul (lista do html) pelos ids para poder criar os li (cada item da lista ul)
    const listaNomeProduto = document.getElementById("nomeProduto");
    const listaQuantidade = document.getElementById("ulQuantidade");     
    const listaValorUnitario = document.getElementById("valorUnitario");

    // Foreach é um loop baseado no tanto de itens que contém na lista
    // dados.forEach(item => {

    //     const itemNomeProduto = document.createElement("li");
    //     itemNomeProduto.textContent = String(item.produto);
    //     listaNomeProduto.appendChild(itemNomeProduto);

    //     const itemQuantidade = document.createElement("li");
    //     itemQuantidade.textContent = String(item.quantidade);
    //     listaQuantidade.appendChild(itemQuantidade);

    //     const itemValorUnitario= document.createElement("li");
    //     itemValorUnitario.textContent = String(item.preco);
    //     listaValorUnitario.appendChild(itemValorUnitario);

    // });

    // Esta variável é responsável por controlar o for debaixo para não incluir itens repetidos na lista ul do html
    let indice = dados.length

    // For é um loop que você pode controlar quantas vezes ele vai rodar
    for(let i = indice; i <= dados.length; i++) {

        // Criando um item na lista "li", adicionando o valor produto do objeto que criamos lá em cima e adicionando o item na lista.
        const itemNomeProduto = document.createElement("li");
        itemNomeProduto.textContent = String(registro.produto);
        listaNomeProduto.appendChild(itemNomeProduto);

        // Criando um item na lista "li", adicionando o valor produto do objeto que criamos lá em cima e adicionando o item na lista.
        const itemQuantidade = document.createElement("li");
        itemQuantidade.textContent = String(registro.quantidade);
        listaQuantidade.appendChild(itemQuantidade);

        // Criando um item na lista "li", adicionando o valor produto do objeto que criamos lá em cima e adicionando o item na lista.
        const itemValorUnitario= document.createElement("li");
        itemValorUnitario.textContent = String(registro.preco);
        listaValorUnitario.appendChild(itemValorUnitario);

    }

}
 
//função para calcular os valores das quantidades dos produtos
    function calcular() {
        const valorTotal = (Number(precoEntrada.value) * Number(quantidadeEntrada.value));
        console.log(precoEntrada);
        console.log(quantidadeEntrada)
        console.log(valorTotal)
        document.getElementById("precototal").value = valorTotal;
    }

    

// class Produto {
// constructor(produto, quantidade, preco, precoTotal){ 

//     this.produto = produto
//     this.quantidade = quantidade
//     this.preco = preco
//     this.precoTotal = precoTotal

// }
// };