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

function validaFuncionario(funcionario) {
    var erros = [];

    if (!funcionario.nome) erros.push("O nome não pode estar vazio.");
    
    // Verificação para garantir que RA contenha apenas números
    if (!/^\d+$/.test(funcionario.ra)) erros.push("O RA deve conter apenas números.");
    if (!/^\d+$/.test(funcionario.tel)) erros.push("O tel deve conter apenas números.");
    if (!/^\d+$/.test(funcionario.salario)) erros.push("O salario deve conter apenas números.");
	if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(funcionario.nome)) erros.push("O nome deve conter apenas letras.");
	if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(funcionario.area)) erros.push("A area deve conter apenas letras.");
    
    if (!funcionario.salario) erros.push("O salário não pode estar vazio.");
    if (!funcionario.tel) erros.push("O telefone não pode estar vazio.");
    if (!funcionario.area) erros.push("A área não pode estar vazia.");

    // if (!validarRa(funcionario.ra)) erros.push("RA é inválido.");
    // if (!validaSalario(funcionario.salario)) erros.push("Salário é inválido.");

    return erros;
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

