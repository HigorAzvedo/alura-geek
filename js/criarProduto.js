import { productsApi } from "./productsApi.js";

const formulario = document.querySelector("[data-form]");

async function criarProduto(evento){
    evento.preventDefault();

    const nome = document.querySelector("[data-nome]").value;
    const preco = document.querySelector("[data-preco]").value;
    const imagem = document.querySelector("[data-imagem]").value;

    await productsApi.criaProduto(nome, preco, imagem);

}

formulario.addEventListener('submit', evento => criarProduto(evento));