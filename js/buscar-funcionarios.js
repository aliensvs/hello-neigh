var botaoAdicionar = document.querySelector("#buscar-funcionarios");

botaoAdicionar.addEventListener("click",function(){
    console.log("buscando");

    var xhr = new XMLHttpRequest()

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes")
    var erroAjax = document.querySelector("#erro-ajax")

    xhr.addEventListener("load", function(){
        if(xhr.status == 200){
        erroAjax.classList.add("invisivel")
        var resposta = xhr.responseText
        var funcionarios = JSON.parse(resposta);

        funcionarios.forEach(function(funcinario){
            adicionaFuncionariosNaTabela(funcinario)
         })
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel")
        }
       
    })

    xhr.send()
})