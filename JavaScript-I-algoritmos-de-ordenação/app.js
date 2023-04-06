const listaLivros = require('./listaLivros');

let maisBarato = 0;

for (let atual = 0; atual < listaLivros.lenth; atual++) {
    if (listaLivros[atual].preco < listaLivros[maisBarato].preco) {
        maisBarato = atual;
    }
}

console.log(`O livro mais barato custa ${listaLivros[maisBarato].preco} e é intitulado ${listaLivros[maisBarato].titulo}`)