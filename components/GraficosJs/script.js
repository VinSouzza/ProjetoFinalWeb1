
const labels = [
  'Banco de Dados',
  'Sistemas Operacionais',
  'Lógica de Programação',
  'Engenharia de Software'
];

let grades = [10, 10, 6.5, 10];


const clamp = (v, min = 0, max = 10) => Math.max(min, Math.min(max, v));
const randGrade = () => +((Math.random() * 10).toFixed(1));


const colors = ['#06b6d4', '#22d3ee', '#f59e0b', '#10b981'];

const barCtx = document.getElementById('barChart');
const barChart = new Chart(barCtx, {
  type: 'bar',
  data: {
    labels,
    datasets: [{
      label: 'Nota (0–10)',
      data: grades.map(g => clamp(g)),
      backgroundColor: colors,
      borderRadius: 6,
      borderWidth: 0
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { callbacks: { label: ctx => ` ${ctx.parsed.y} / 10` } }
    },
    scales: {
      y: { beginAtZero: true, max: 10, ticks: { stepSize: 1 } },
      x: {}
    }
  }
});
const lineCtx = document.getElementById('lineChart');
const lineChart = new Chart(lineCtx, {
  type: 'line',
  data: {
    labels,
    datasets: [{
      label: 'Notas',
      data: grades.map(g => clamp(g)),
      borderColor: '#06b6d4',
      backgroundColor: 'rgba(6,182,212,0.12)',
      tension: 0.35,
      fill: true,
      pointRadius: 6,
      pointBackgroundColor: colors
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: { min: 0, max: 10, ticks: { stepSize: 1 } },
      x: {}
    }
  }
});

const pieCtx = document.getElementById('pieChart');
const pieChart = new Chart(pieCtx, {
  type: 'pie',
  data: {
    labels,
    datasets: [{
      data: grades.map(g => clamp(g)),
      backgroundColor: colors,
      hoverOffset: 8
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: true, 
    aspectRatio: 1,            
    plugins: {
      legend: { position: 'bottom' }
    }
  }
});


function updateAllCharts(newGrades) {
  grades = newGrades.map(g => +g.toFixed(1));
  barChart.data.datasets[0].data = grades;
  lineChart.data.datasets[0].data = grades;
  pieChart.data.datasets[0].data = grades;
  barChart.update();
  lineChart.update();
  pieChart.update();
}

document.getElementById('randomizeAll').addEventListener('click', () => {
  const newGrades = grades.map(() => randGrade());
  updateAllCharts(newGrades);
});

// Init function called by the loader after component injection
function initGraficos() {
  console.log('Gráficos inicializados');
}
