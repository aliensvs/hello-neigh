var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input",function(){
    console.log(this.value)
    var moradores = document.querySelectorAll(".morador")

    if( this.value.length > 0){
        for(var i = 0; i < moradores.length ; i++){
        var morador = moradores[i];
        var tdNome = morador.querySelector(".info-nome")
        var nome = tdNome.textContent;
        var expressao = new RegExp(this.value,"i")
        if( !expressao.test(nome)){
            morador.classList.add("invisivel")
        }else{
            morador.classList.remove("invisivel")
        }
        }   

    }else{
        for(var i = 0; i < moradores.length ; i++){
            var morador = moradores[i];
            morador.classList.remove("invisivel")
        }
    }
}
)
    
