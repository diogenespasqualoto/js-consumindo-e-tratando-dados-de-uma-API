async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPConvertida = await consultaCEP.json();
        if (consultaCEPConvertida.erro) {
            throw Error('CEP não existente!');
        }
        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');

        cidade.value = consultaCEPConvertida.localidade;
        logradouro.value = consultaCEPConvertida.logradouro;
        estado.value = consultaCEPConvertida.uf;

        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;
    } catch (erro) {

        if (cep.length < 8 || cep.length > 9) { //Se tiver números a mais ou  faltando

            mensagemErro.innerHTML = `<p>Está faltando número ou possui números demais</p>`;

            console.log(erro);

        } else

            if (cep = /^[a-z]/) {

                mensagemErro.innerHTML = `<p>Tem letra nesse CEP, corrija por favor.`;
                console.log(erro);


            } else

                if (cep != /^[0-9]{5}?-[0-9]{3}$/) { //qualquer coisa diferente dos números

                    mensagemErro.innerHTML = `<p>Formato inválido. Um CEP válido contém 8 números, sem espaço e letras. Insira o CEP novamente.</p>`;
                    console.log(erro);

                }
                else { // O normal do CEP não encontrado. 

                    mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`;
                    console.log(erro);

                }


        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`
        console.log(erro);
    }
}
var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => limparCampos()); //Limpa os campos 
cep.addEventListener("focusout", () => buscaEndereco(cep.value));

function limparCampos() {

    cidade.value = "";
    logradouro.value = "";
    estado.value = "";
    bairro.value = "";

} 
