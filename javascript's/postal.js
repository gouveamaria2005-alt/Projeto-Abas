function salvar() {
  const nomeDestinatario = document.getElementById("nomeDestinatario").value;
  const cpfDestinatario = document.getElementById("cpfDestinatario") .value;
  
  if (nomeDestinatario && cpfDestinatario) {
    alert("Cadastro Postal Salvo!\nNome: " + nomeDestinatario + "\nCPF: " + cpfDestinatario);
  } else {
    alert("Preencha os campos obrigatórios!");
  }
}

function limpar() {
  const inputs = document.querySelectorAll("#cadastroPostalForm input");
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
