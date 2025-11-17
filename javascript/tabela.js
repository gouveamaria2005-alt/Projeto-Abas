// script.js
// A lista de vídeos deve ser armazenada fora da função para o filtro funcionar
// A primeira execução deve ser feita dentro de 'carregarVideos' para obter os dados
let videosCarregados = []; 

// Função principal: carrega os vídeos do arquivo JSON
async function carregarVideos() {
  try {
    // Faz a requisição do arquivo JSON
    const resposta = await fetch("../json's/tabela.json");

    // Verifica se a resposta foi bem-sucedida (status 200-299)
    if (!resposta.ok) {
      throw new Error(`Erro de HTTP! Status: ${resposta.status}`);
    }

    // Converte o conteúdo da resposta para JSON
    videosCarregados = await resposta.json(); // Armazena na variável global

    // Exibe os dados na tabela
    mostrarVideos(videosCarregados);
  } catch (erro) {
    console.error("Erro ao carregar vídeos:", erro);
    alert("Não foi possível carregar os dados. Verifique o console para mais detalhes.");
  }
}

// Função para mostrar os vídeos na tabela
function mostrarVideos(lista) {
  const corpoTabela = document.querySelector("#tabelaVideos tbody");
  // Se 'corpoTabela' for nulo, significa que o ID ou a tag não foi encontrada no HTML
  if (!corpoTabela) {
    console.error("Elemento 'tbody' da tabela não encontrado.");
    return;
  }
  
  corpoTabela.innerHTML = "";

  lista.forEach((video, index) => {
    // Corrigido: Para usar o índice original, você pode passar a lista original ou 
    // usar a própria lista filtrada, mas o índice será sequencial (1, 2, 3...)
    const linha = document.createElement("tr");
    linha.innerHTML = `
      <td>${index + 1}</td>
      <td>${video.nome}</td>
      <td>${video.data}</td>
      <td>${video.palavraChave}</td>
    `;
    corpoTabela.appendChild(linha);
  });
}

// Função de filtragem
function filtrarVideos(termo) {
  const termoLower = termo.toLowerCase();
  
  // Filtra a lista completa de vídeos
  const videosFiltrados = videosCarregados.filter(video => {
    return video.nome.toLowerCase().includes(termoLower);
  });
  
  // Mostra apenas os vídeos filtrados
  mostrarVideos(videosFiltrados);
}

// Adiciona um listener ao campo de filtro
document.getElementById("filtro").addEventListener("input", (evento) => {
  filtrarVideos(evento.target.value);
});

// Botão para carregar os dados
document.getElementById("btnCarregar").addEventListener("click", carregarVideos);

// Chamada inicial (opcional: carrega os vídeos assim que a página é aberta)
// document.addEventListener('DOMContentLoaded', carregarVideos);