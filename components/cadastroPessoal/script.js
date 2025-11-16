function initCadastroPessoal() {
    function mascaraCPF(valor) {
        return valor
            .replace(/\D/g, '')               
            .replace(/(\d{3})(\d)/, '$1.$2')   
            .replace(/(\d{3})(\d)/, '$1.$2')   
            .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    }

    function mascaraRG(valor) {
        return valor
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1})$/, '$1-$2');
    }

    function formatarOrgaoEmissor(valor) {
        valor = valor.toUpperCase().replace(/[^A-Z]/g, ''); 
        if (valor.length > 4) {
            return valor.slice(0, -2) + '-' + valor.slice(-2);
        }
        return valor;
    }

    function mascaraCEP(valor) {
        return valor
            .replace(/\D/g, '')
            .replace(/^(\d{5})(\d)/, '$1-$2');
    }

    function mascaraTelefone(valor) {
        return valor
            .replace(/\D/g, '')
            .replace(/^(\d{2})(\d)/g, '($1) $2')
            .replace(/(\d{5})(\d{4})$/, '$1-$2');
    }

    const cpf = document.getElementById('cpf');
    const rg = document.getElementById('rg');
    const orgao = document.getElementById('orgao');
    const cep = document.getElementById('cep');
    const telefone = document.getElementById('telefone');

    if (cpf) cpf.addEventListener('input', () => { cpf.value = mascaraCPF(cpf.value); });
    if (rg) rg.addEventListener('input', () => { rg.value = mascaraRG(rg.value); });
    if (orgao) orgao.addEventListener('input', () => { orgao.value = formatarOrgaoEmissor(orgao.value); });
    if (cep) cep.addEventListener('input', () => { cep.value = mascaraCEP(cep.value); });
    if (telefone) telefone.addEventListener('input', () => { telefone.value = mascaraTelefone(telefone.value); });
}