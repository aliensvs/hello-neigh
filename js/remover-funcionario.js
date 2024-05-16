var funcionarios = document.querySelectorAll(".funcinario")

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut")
    setTimeout(function(){
        event.target.parentNode.remove(); 
    },500)
 
    // ^ é a mesma coisa so que em uma linha
    // var alvoEvento = event.target;
    // var paiDoAlvo = alvoEvento.parentNode; // TR = funcinario = removar
    // paiDoAlvo.remove()
});

