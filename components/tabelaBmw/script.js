function initTabelaBmw() {
  const data = [
  {
    "Modelo": "320i",
    "Versao": "Sport GP",
    "Ano": 2023,
    "Motor": "2.0 Turbo",
    "Potencia": "184 cv",
    "Combustivel": "Gasolina",
    "Preco": "R$ 289.900",
    "Consumo": "12,0 km/l",
    "0-100": "7.6s",
    "Torque": "300 Nm",
    "Cor": "Carbon Black",
    "Categoria": "Sedan"
  },
  {
    "Modelo": "330e",
    "Versao": "M Sport",
    "Ano": 2024,
    "Motor": "Híbrido 2.0 + Elétrico",
    "Potencia": "292 cv",
    "Combustivel": "Híbrido",
    "Preco": "R$ 389.900",
    "Consumo": "25,0 km/l",
    "0-100": "5.9s",
    "Torque": "420 Nm",
    "Cor": "Alpine White",
    "Categoria": "Sedan"
  },
  {
    "Modelo": "M340i",
    "Versao": "xDrive",
    "Ano": 2024,
    "Motor": "3.0 TwinTurbo",
    "Potencia": "387 cv",
    "Combustivel": "Gasolina",
    "Preco": "R$ 549.900",
    "Consumo": "10,5 km/l",
    "0-100": "4.4s",
    "Torque": "500 Nm",
    "Cor": "Brooklyn Grey",
    "Categoria": "Sedan"
  },
  {
    "Modelo": "530e",
    "Versao": "M Sport",
    "Ano": 2024,
    "Motor": "Híbrido 2.0 + Elétrico",
    "Potencia": "292 cv",
    "Combustivel": "Híbrido",
    "Preco": "R$ 499.900",
    "Consumo": "22,0 km/l",
    "0-100": "6.0s",
    "Torque": "420 Nm",
    "Cor": "Sophisto Grey",
    "Categoria": "Sedan"
  },
  {
    "Modelo": "540i",
    "Versao": "M Sport",
    "Ano": 2023,
    "Motor": "3.0 TwinTurbo",
    "Potencia": "340 cv",
    "Combustivel": "Gasolina",
    "Preco": "R$ 589.900",
    "Consumo": "10,0 km/l",
    "0-100": "5.1s",
    "Torque": "450 Nm",
    "Cor": "Mineral White",
    "Categoria": "Sedan"
  },
  {
    "Modelo": "740i",
    "Versao": "Pure Excellence",
    "Ano": 2024,
    "Motor": "3.0 TwinTurbo",
    "Potencia": "381 cv",
    "Combustivel": "Gasolina",
    "Preco": "R$ 1.199.900",
    "Consumo": "9,5 km/l",
    "0-100": "5.4s",
    "Torque": "520 Nm",
    "Cor": "Dravit Grey",
    "Categoria": "Sedan Luxo"
  },
  {
    "Modelo": "X1",
    "Versao": "sDrive20i",
    "Ano": 2024,
    "Motor": "2.0 Turbo",
    "Potencia": "170 cv",
    "Combustivel": "Gasolina",
    "Preco": "R$ 299.900",
    "Consumo": "13,5 km/l",
    "0-100": "8.5s",
    "Torque": "280 Nm",
    "Cor": "Storm Bay",
    "Categoria": "SUV"
  },
  {
    "Modelo": "X2",
    "Versao": "sDrive20i",
    "Ano": 2024,
    "Motor": "2.0 Turbo",
    "Potencia": "192 cv",
    "Combustivel": "Gasolina",
    "Preco": "R$ 329.900",
    "Consumo": "12,8 km/l",
    "0-100": "7.7s",
    "Torque": "280 Nm",
    "Cor": "Sunset Orange",
    "Categoria": "SUV"
  },
  {
    "Modelo": "X3",
    "Versao": "xDrive30i",
    "Ano": 2024,
    "Motor": "2.0 Turbo",
    "Potencia": "252 cv",
    "Combustivel": "Gasolina",
    "Preco": "R$ 429.900",
    "Consumo": "11,5 km/l",
    "0-100": "6.5s",
    "Torque": "350 Nm",
    "Cor": "Mineral White",
    "Categoria": "SUV"
  },
  {
    "Modelo": "X4",
    "Versao": "xDrive30i M Sport",
    "Ano": 2024,
    "Motor": "2.0 Turbo",
    "Potencia": "252 cv",
    "Combustivel": "Gasolina",
    "Preco": "R$ 469.900",
    "Consumo": "11,2 km/l",
    "0-100": "6.3s",
    "Torque": "350 Nm",
    "Cor": "Phytonic Blue",
    "Categoria": "SUV Coupé"
  },
  {
    "Modelo": "X5",
    "Versao": "xDrive40i",
    "Ano": 2024,
    "Motor": "3.0 Turbo",
    "Potencia": "340 cv",
    "Combustivel": "Gasolina",
    "Preco": "R$ 789.900",
    "Consumo": "9,5 km/l",
    "0-100": "5.6s",
    "Torque": "450 Nm",
    "Cor": "Sapphire Black",
    "Categoria": "SUV"
  },
  {
    "Modelo": "X6",
    "Versao": "xDrive40i M Sport",
    "Ano": 2024,
    "Motor": "3.0 Turbo",
    "Potencia": "340 cv",
    "Combustivel": "Gasolina",
    "Preco": "R$ 859.900",
    "Consumo": "9,3 km/l",
    "0-100": "5.5s",
    "Torque": "450 Nm",
    "Cor": "Aventurine Red",
    "Categoria": "SUV Coupé"
  },
  {
    "Modelo": "X7",
    "Versao": "xDrive40i M Sport",
    "Ano": 2024,
    "Motor": "3.0 Turbo",
    "Potencia": "381 cv",
    "Combustivel": "Gasolina",
    "Preco": "R$ 1.099.900",
    "Consumo": "8,9 km/l",
    "0-100": "5.8s",
    "Torque": "520 Nm",
    "Cor": "Arctic Grey",
    "Categoria": "SUV Luxo"
  },
  {
    "Modelo": "i4",
    "Versao": "eDrive40",
    "Ano": 2024,
    "Motor": "Elétrico",
    "Potencia": "340 cv",
    "Combustivel": "Elétrico",
    "Preco": "R$ 529.900",
    "Consumo": "–",
    "0-100": "5.7s",
    "Torque": "400 Nm",
    "Cor": "Glacier Silver",
    "Categoria": "Elétrico"
  },
  {
    "Modelo": "i5",
    "Versao": "M60 xDrive",
    "Ano": 2024,
    "Motor": "Elétrico",
    "Potencia": "601 cv",
    "Combustivel": "Elétrico",
    "Preco": "R$ 759.900",
    "Consumo": "–",
    "0-100": "3.8s",
    "Torque": "820 Nm",
    "Cor": "Frozen Pure Grey",
    "Categoria": "Elétrico"
  },
  {
    "Modelo": "i7",
    "Versao": "xDrive60",
    "Ano": 2024,
    "Motor": "Elétrico",
    "Potencia": "544 cv",
    "Combustivel": "Elétrico",
    "Preco": "R$ 1.599.900",
    "Consumo": "–",
    "0-100": "4.7s",
    "Torque": "745 Nm",
    "Cor": "Black Sapphire",
    "Categoria": "Elétrico Luxo"
  },
  {
    "Modelo": "iX1",
    "Versao": "xDrive30",
    "Ano": 2024,
    "Motor": "Elétrico",
    "Potencia": "313 cv",
    "Combustivel": "Elétrico",
    "Preco": "R$ 429.900",
    "Consumo": "–",
    "0-100": "5.6s",
    "Torque": "494 Nm",
    "Cor": "Space Silver",
    "Categoria": "SUV Elétrico"
  },
  {
    "Modelo": "iX3",
    "Versao": "M Sport",
    "Ano": 2024,
    "Motor": "Elétrico",
    "Potencia": "286 cv",
    "Combustivel": "Elétrico",
    "Preco": "R$ 459.900",
    "Consumo": "–",
    "0-100": "6.8s",
    "Torque": "400 Nm",
    "Cor": "Sophisto Grey",
    "Categoria": "SUV Elétrico"
  },
  {
    "Modelo": "iX",
    "Versao": "xDrive50",
    "Ano": 2024,
    "Motor": "Elétrico",
    "Potencia": "523 cv",
    "Combustivel": "Elétrico",
    "Preco": "R$ 1.299.900",
    "Consumo": "–",
    "0-100": "4.6s",
    "Torque": "765 Nm",
    "Cor": "Phytonic Blue",
    "Categoria": "SUV Elétrico"
  },
  {
    "Modelo": "Z4",
    "Versao": "sDrive30i",
    "Ano": 2023,
    "Motor": "2.0 Turbo",
    "Potencia": "258 cv",
    "Combustivel": "Gasolina",
    "Preco": "R$ 379.900",
    "Consumo": "10,5 km/l",
    "0-100": "5.4s",
    "Torque": "400 Nm",
    "Cor": "Pure White",
    "Categoria": "Roadster"
  },
  {
    "Modelo": "M2",
    "Versao": "Competition",
    "Ano": 2024,
    "Motor": "3.0 TwinTurbo",
    "Potencia": "460 cv",
    "Combustivel": "Gasolina",
    "Preco": "R$ 689.900",
    "Consumo": "8,7 km/l",
    "0-100": "4.1s",
    "Torque": "550 Nm",
    "Cor": "Zandvoort Blue",
    "Categoria": "Performance"
  },
  {
    "Modelo": "M3",
    "Versao": "Competition xDrive",
    "Ano": 2024,
    "Motor": "3.0 TwinTurbo",
    "Potencia": "510 cv",
    "Combustivel": "Gasolina",
    "Preco": "R$ 799.900",
    "Consumo": "8,0 km/l",
    "0-100": "3.9s",
    "Torque": "650 Nm",
    "Cor": "Toronto Red",
    "Categoria": "Performance"
  },
  {
    "Modelo": "M4",
    "Versao": "Coupé Competition",
    "Ano": 2024,
    "Motor": "3.0 TwinTurbo",
    "Potencia": "530 cv",
    "Combustivel": "Gasolina",
    "Preco": "R$ 859.900",
    "Consumo": "7,8 km/l",
    "0-100": "3.5s",
    "Torque": "650 Nm",
    "Cor": "Isle of Man Green",
    "Categoria": "Performance Coupé"
  },
  {
    "Modelo": "M5",
    "Versao": "Competition",
    "Ano": 2024,
    "Motor": "4.4 TwinTurbo",
    "Potencia": "625 cv",
    "Combustivel": "Gasolina",
    "Preco": "R$ 1.099.900",
    "Consumo": "7,5 km/l",
    "0-100": "3.3s",
    "Torque": "750 Nm",
    "Cor": "Marina Bay Blue",
    "Categoria": "Performance Sedan"
  },
  {
    "Modelo": "M8",
    "Versao": "Competition Gran Coupé",
    "Ano": 2024,
    "Motor": "4.4 TwinTurbo",
    "Potencia": "625 cv",
    "Combustivel": "Gasolina",
    "Preco": "R$ 1.249.900",
    "Consumo": "7,2 km/l",
    "0-100": "3.2s",
    "Torque": "750 Nm",
    "Cor": "Frozen Black",
    "Categoria": "Performance Luxo"
  }
]
;

const table = document.getElementById('table');
const thead = document.getElementById('thead');
const tbody = document.getElementById('tbody');
const search = document.getElementById('search');
const pageSizeSelect = document.getElementById('pageSize');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const info = document.getElementById('info');

let headers = Object.keys(data[0]);
let currentPage = 1;
let pageSize = Number(pageSizeSelect.value);
let sortCol = null;
let sortDir = 1;

function buildHeader() {
  thead.innerHTML = `<tr>${headers.map(h => `<th data-col="${h}">${h}</th>`).join('')}</tr>`;
}

function getFilteredRows(q) {
  if (!q) return data.slice();
  q = q.toLowerCase();
  return data.filter(r => headers.some(h => String(r[h]).toLowerCase().includes(q)));
}

function sortRows(rows) {
  if (!sortCol) return rows;
  return rows.sort((a,b) => {
    const A = String(a[sortCol] ?? '').toLowerCase();
    const B = String(b[sortCol] ?? '').toLowerCase();
    if (A === B) return 0;
    return A > B ? sortDir : -sortDir;
  });
}

function render() {
  pageSize = Number(pageSizeSelect.value);
  const q = search.value.trim();
  let rows = getFilteredRows(q);
  rows = sortRows(rows);

  const total = rows.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  if (currentPage > totalPages) currentPage = totalPages;

  const start = (currentPage - 1) * pageSize;
  const paged = rows.slice(start, start + pageSize);

  tbody.innerHTML = paged.map(r => {
    return `<tr>${headers.map(h => `<td>${r[h] ?? ''}</td>`).join('')}</tr>`;
  }).join('');

  info.textContent = `Mostrando ${total === 0 ? 0 : start + 1}–${total === 0 ? 0 : Math.min(start + paged.length, total)} de ${total}`;
}

function toggleSort(col) {
  if (sortCol === col) sortDir = -sortDir;
  else { sortCol = col; sortDir = 1; }
  render();
}

buildHeader();
render();

search.addEventListener('input', () => { currentPage = 1; render(); });
pageSizeSelect.addEventListener('change', () => { currentPage = 1; render(); });
prevBtn.addEventListener('click', () => { if (currentPage>1) { currentPage--; render(); } });
nextBtn.addEventListener('click', () => { currentPage++; render(); });

  thead.addEventListener('click', (e) => {
    const th = e.target.closest('th');
    if (!th) return;
    const col = th.dataset.col;
    toggleSort(col);
  });
}