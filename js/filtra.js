var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input",function(){
    console.log(this.value)
    var funcionarios = document.querySelectorAll(".funcionario")

    if( this.value.length > 0){
        for(var i = 0; i < funcionarios.length ; i++){
        var funcionario = funcionarios[i];
        var tdNome = funcionario.querySelector(".info-nome")
        var nome = tdNome.textContent;
        var expressao = new RegExp(this.value,"i")
        if( !expressao.test(nome)){
            funcionario.classList.add("invisivel")
        }else{
            funcionario.classList.remove("invisivel")
        }
        }   

    }else{
        for(var i = 0; i < funcionarios.length ; i++){
            var funcionario = funcionarios[i];
            funcionario.classList.remove("invisivel")
        }
    }
}
)
    
