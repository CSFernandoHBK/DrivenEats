function selecionarPrato(){
    const nomePrato = document.querySelector(".titulo-prato");
    const precoPrato = document.querySelector(".preco-prato");
    const prato = document.querySelector(".prato")
    prato.classList.toggle("selecionado")
    const check = document.querySelector(".check-item")
    check.classList.toggle("escondido")
}