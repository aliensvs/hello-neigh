var botaoAdicionar = document.querySelector("#adicionar-funcionario");
botaoAdicionar.addEventListener("click", function(event){
	event.preventDefault();
	


	var form = document.querySelector("#form-adiciona");

	// extrai informacoes do funcionario
    var funcionario = obtemFuncionarioDoFormulario(form);
	
	var erros = validaFuncionario(funcionario);

	if(erros.length > 0 ){
		exibiMensagensDeErro(erros)

		return
	}
	 // aciciona o funcionaro na tabela
	adicionaFuncionarioNaTabela(funcionario)

	 form.reset();
	 var mensagensDeErro = document.querySelector("#mensagens-erro");
	 mensagensDeErro.innerHTML = "";

});

function adicionaFuncionarioNaTabela(funcionario){
	var funcionarioTr = montaTr(funcionario);
	var tabela = document.querySelector("#tabela-funcionarios");
	tabela.appendChild(funcionarioTr);

}

function obtemFuncionarioDoFormulario(form){
	var funcionario = {
		nome: form.nome.value,
		ra: form.ra.value,
		salario: form.salario.value,
		tel: form.tel.value,
		area: form.area.value
	}

	return funcionario;
}

function montaTr(funcionario){

	var funcionarioTr = document.createElement("tr");
	funcionarioTr.classList.add("funcionario");
    
	funcionarioTr.appendChild(montaTd(funcionario.nome, "info-nome"));
	funcionarioTr.appendChild(montaTd(funcionario.ra, "info-ra"));
	funcionarioTr.appendChild(montaTd(funcionario.salario, "info-salario"));
	funcionarioTr.appendChild(montaTd(funcionario.tel, "info-tel"));
	funcionarioTr.appendChild(montaTd(funcionario.area, "info-area"));


	return funcionarioTr
}

function montaTd(dado,classe) {

	var Td = document.createElement("td");
	Td.textContent = dado;
	Td.classList.add(classe);

	return Td;
}

function validaFuncionario(funcionario){

	var erros = [] 
	if(funcionario.nome == 0 ) erros.push("o nome não pode ser em branco");
	if(funcionario.ra == 0 ) erros.push("a ra não pode ser em banco");
	if(funcionario.salario == 0 ) erros.push("a salario não pode ser em branco");
	if(funcionario.tel == 0 ) erros.push("o tel não pode ser em branco");
	if(funcionario.area == 0 ) erros.push("area não pode ser em branco");
	if(!validarRa(funcionario.ra)) erros.push("Ra é inválido");
	if(!validaSalario(funcionario.salario)) erros.push("Salario é inválido");
	return erros
}

function exibiMensagensDeErro(erros){
	var ul = document.querySelector("#mensagens-erro")
	ul.innerHTML = "";

	erros.forEach(function(erro) {

		var li = document.createElement("li")
		li.textContent = erro;
		ul.appendChild(li);
	});
}
