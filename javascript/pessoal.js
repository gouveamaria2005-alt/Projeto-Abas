function salvar() {
  const nome = document.getElementById("nome").value;
  const cpf = document.getElementById("cpf").value;
  const carro = document.getElementById("carro").value;
  
  if (nome && cpf) {
    alert("Cadastro salvo!\nNome: " + nome + "\nCPF: " + cpf + "\nCarro: " + carro);
  } else {
    alert("Preencha os campos obrigatórios!");
  }
}

function limpar() {
  const inputs = document.querySelectorAll("#cadastroForm input");
  inputs.forEach(input => input.value = "");
}



// Faz o ENTER funcionar como TAB
document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    const inputs = Array.from(document.querySelectorAll("input"));
    const index = inputs.indexOf(document.activeElement);

    if (index !== -1) {
      event.preventDefault();
      const next = inputs[index + 1];
      if (next) next.focus();
    }
  }
});
