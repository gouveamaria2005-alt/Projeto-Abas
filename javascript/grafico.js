// Matérias
const materias = ["Engenharia de Software", "Desenvolvimento Web", "Modelagem de Banco de Dados", "Sistemas Operacionais", "Design", "Algoritmos"];

const cores = [
  "#ff4da6", // rosa forte
  "#ff85c1", // rosa médio
  "#ffa6d1", // rosa claro
  "#c77dff", // lilás
  "#b5a1ff", // roxo pastel
  "#fcb4ff"  // rosa lavanda
];

// 1º Semestre - Gráfico de Barras
new Chart(document.getElementById("grafico1"), {
  type: "bar",
  data: {
    labels: materias,
    datasets: [{
      label: "Notas",
      data: [7.5, 8.0, 6.5, 9.0, 8.5, 9.0],
      backgroundColor: cores
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true, max: 10 } }
  }
});

// 2º Semestre - Gráfico de Linhas
new Chart(document.getElementById("grafico2"), {
  type: "line",
  data: {
    labels: materias,
    datasets: [{
      label: "Notas",
      data: [8.0, 8.5, 7.0, 9.5, 8.8, 9.0],
      borderColor: "#ff4da6",
      backgroundColor: "rgba(255, 182, 217, 0.3)",
      fill: true,
      tension: 0.4,
      pointBackgroundColor: "#ff4da6"
    }]
  },
  options: {
    responsive: true,
    scales: { y: { beginAtZero: true, max: 10 } }
  }
});

// 3º Semestre - Gráfico de Pizza
new Chart(document.getElementById("grafico3"), {
  type: "pie",
  data: {
    labels: materias,
    datasets: [{
      data: [9.0, 8.0, 7.5, 9.5, 8.5, 9.0],
      backgroundColor: cores
    }]
  },
  options: { responsive: true }
});

// 4º Semestre - Gráfico de Radar
new Chart(document.getElementById("grafico4"), {
  type: "radar",
  data: {
    labels: materias,
    datasets: [{
      label: "Notas",
      data: [7.0, 9.0, 8.5, 9.5, 8.0, 9.2],
      backgroundColor: "rgba(255, 133, 193, 0.3)",
      borderColor: "#c77dff",
      pointBackgroundColor: "#ff4da6"
    }]
  },
  options: {
    scales: { r: { beginAtZero: true, max: 10 } }
  }
});

// 5º Semestre - Gráfico de Dispersão
new Chart(document.getElementById("grafico5"), {
  type: "scatter",
  data: {
    datasets: [{
      label: "Desempenho por matéria",
      data: [
        { x: 1, y: 8 },
        { x: 2, y: 8.5 },
        { x: 3, y: 9 },
        { x: 4, y: 9.5 },
        { x: 5, y: 8.2 },
        { x: 6, y: 9.0 }
      ],
      backgroundColor: "#b5a1ff"
    }]
  },
  options: {
    scales: {
      x: { title: { display: true, text: "Matérias (1 a 6)" } },
      y: { title: { display: true, text: "Notas" }, beginAtZero: true, max: 10 }
    }
  }
});
