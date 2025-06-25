function adicionarElemento(){
    var id =  document.getElementById("conteudo")
    var elementoNovo = document.createElement("input")
    elementoNovo.value = "Valor novo"
    id.appendChild(elementoNovo)
    window.alert('Você criou um negocio ai ;D')
}