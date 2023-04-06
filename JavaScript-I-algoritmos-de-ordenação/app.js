const precosDeLivros = [25, 15, 42, 30, 57, 12]

let maisBarato = precosDeLivros[0];

for (let livro of precosDeLivros ) {
    if (livro < maisBarato) {
        maisBarato = livro;
    }
}

console.log(maisBarato)