function selecionarPrato(elemento){
    const nomePrato = document.querySelector(".titulo-prato");
    const precoPrato = document.querySelector(".preco-prato");
    
    const pratoSelecionado = document.querySelector(".prato .selecionado")

    if (pratoSelecionado !== null){
        pratoSelecionado.classList.remove("selecionado")
    }

    elemento.classList.toggle("selecionado")

    const check = document.querySelector(".check-item")
    check.classList.toggle("escondido")
}
function checkitem(check){
    check.classList.toggle("escondido")
}