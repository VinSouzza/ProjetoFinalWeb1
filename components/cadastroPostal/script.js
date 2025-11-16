function initCadastroPostal() {
  function mascaraCEP(v) {
    return v
      .replace(/\D/g, "") // remove tudo que não é dígito
      .replace(/^(\d{5})(\d)/, "$1-$2") // insere hífen após 5 dígitos
      .slice(0, 9); // limita a 9 caracteres (00000-000)
  }

  function mascaraTelefone(v) {
    v = v.replace(/\D/g, ""); // remove não dígitos
    if (v.length <= 10) {
      // formato (XX) XXXX-XXXX
      return v.replace(/^(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3").trim();
    } else {
      // formato (XX) XXXXX-XXXX
      return v.replace(/^(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3").trim();
    }
  }
}
