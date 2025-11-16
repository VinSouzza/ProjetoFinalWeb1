async function carregarComCss(id, caminho, initFnName = null) {
  // Carregar HTML
  const html = await fetch(`${caminho}/index.html`).then(res => res.text());

  // Parse HTML to avoid inserting full <html>/<head> into the main document
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const content = doc.body ? doc.body.innerHTML : html;
  const container = document.getElementById(id);
  if (!container) return console.warn(`Container with id ${id} not found`);
  container.innerHTML = content;

  // Carregar CSS dinamicamente
  // Add stylesheet once per component path
  // Special case: tabelaBmw uses styel.css instead of style.css
  let cssFile = 'style.css';
  if (caminho === 'components/tabelaBmw') cssFile = 'styel.css';
  
  const cssHref = `${caminho}/${cssFile}`;
  if (!document.querySelector(`link[href="${cssHref}"]`)) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = cssHref;
    document.head.appendChild(link);
  }

  // Carregar JS dinamicamente
  const scriptSrc = `${caminho}/script.js`;
  // Remove existing script if already added for this component to avoid duplicate execution
  const existing = document.querySelector(`script[src="${scriptSrc}"]`);
  if (existing) existing.remove();

  const script = document.createElement("script");
  script.src = scriptSrc;
  script.async = false; // keep execution order predictable
  script.onload = () => {
    // If caller passed an init function name, call it if available
    if (initFnName && typeof window[initFnName] === 'function') {
      try { window[initFnName](); } catch (e) { console.error(e); }
    }
  };
  document.body.appendChild(script);
}

// Chamadas para carregar componentes
carregarComCss("cadastroPessoal", "components/cadastroPessoal", "initCadastroPessoal");
carregarComCss("cadastroEstudantil", "components/cadastroEstudantil", "initCadastroEstudantil");
carregarComCss("cadastroPostal", "components/cadastroPostal", "initCadastroPostal");
carregarComCss("tabelaBmw", "components/tabelaBmw", "initTabelaBmw");
carregarComCss("carrousel", "components/carousel", "initializeCarousel");
carregarComCss("graficos", "components/GraficosJs", "initGraficos");
carregarComCss("siteBmw", "components/SiteBMW");
