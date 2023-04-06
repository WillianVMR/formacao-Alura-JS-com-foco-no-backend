const listaLivros = require('./listaLivros');

let maisBarato = precosDeLivros[0];

for (let livro of precosDeLivros ) {
    if (livro < maisBarato) {
        maisBarato = livro;
    }
}

console.log(maisBarato)