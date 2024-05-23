async function listaCard(){

    const conexao = await fetch("http://localhost:3000/produtos");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
   
}

async function criaProduto(nome, preco, imagem){

    const conexao = await fetch("http://localhost:3000/produtos", {
        method: "POST",
        headers:{
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            preco: preco,
            imagem: imagem
        })
    });

    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
   
}

async function apagaProduto(id){

    const conexao = await fetch(`http://localhost:3000/produtos/${id}`, {
        method: "DELETE"
    })

    return conexao;
}

export const productsApi = {
    listaCard,
    criaProduto,
    apagaProduto
}