let amigos = [];

document.querySelector(".button-add").addEventListener("click", adicionarAmigo);
document.querySelector(".button-draw").addEventListener("click", sortearAmigo);

function adicionarAmigo(event){
    event.preventDefault();

    const input = document.querySelector("#amigo");
    const nomeAmigo = input.value.trim();

    if (nomeAmigo === ""){
        alert("Não deixe o campo vazio. Insira um nome.");
        return;
    }

    amigos.push(nomeAmigo);
    mostrarAmigos();
    input.value = "";
}

function mostrarAmigos(){
    const listaAmigos = document.querySelector("#listaAmigos");

    listaAmigos.innerHTML = amigos.map(nome => `<li>${nome}</li>`).join('');
}

function sortearAmigo(){
    if (amigos.length === 0){
        alert("Adicione amigos para realizar o sorteio.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = `O amigo sorteado é: <li>${amigoSorteado}</li>`;
}