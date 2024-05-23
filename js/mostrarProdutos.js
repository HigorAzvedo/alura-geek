import { productsApi } from "./productsApi.js";

const produtos = document.querySelector("[data-product]");

function constroiProdutos(nome, preco, imagem, id) {
    const card = document.createElement("div");
    card.className = "card";
    card.setAttribute('data-id', id);
    card.innerHTML = `  
    
    <div class="img-container">
        <img class="img" src="${imagem}" alt="logo produto">
    </div>
        <div class="card-container-info">
            <p>${nome}</p>
            <div class="card-container-value">
                <p>R$ ${preco}</p>
                <button class="delete-button" data-id="${id}">
                    <img class="icon-trash delete" src="./imagens/icon-trash.png" alt="icone de lixeira">
                </button>
            </div>
        </div>
    </div>`

    const deletarCard = card.querySelector(".delete");
    deletarCard.addEventListener('click', async () =>{
        const id = card.getAttribute('data-id');
        console.log(id);
        card.remove();
    
        await productsApi.apagaProduto(id);
    })

    return card;
}

async function listaCard(){
    const listaApi = await productsApi.listaCard();
    listaApi.forEach(elemento => produtos.appendChild(
        constroiProdutos(elemento.nome, elemento.preco, elemento.imagem, elemento.id)));
}

listaCard();

