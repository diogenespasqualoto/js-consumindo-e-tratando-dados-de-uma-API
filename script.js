async function buscaEndereco() {
    try {
        const consultaCEP = 
        await fetch('https://viacep.com.br/ws/01001250/json/')
        const consultaCEPConvertida = await consultaCEP.json()
        if (consultaCEPConvertida.erro) {
            throw Error('CEP não existente')
        }
        console.log(consultaCEPConvertida);
    } catch (erro) {
        console.log(erro)
    }
}
buscaEndereco()
// .then(resposta => resposta.json())
// .then(r => {
//     if(r.erro){
//         throw Error('esse cep não existe!')
//     }
//     console.log(r)})
// .catch(erro=> console.log(erro))
// .finally(mensagem=> console.log('Processamento concluido!'))

// console.log(consultaCEP)
