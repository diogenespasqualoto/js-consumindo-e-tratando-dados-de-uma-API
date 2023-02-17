async function buscaEndereco() {

    const consultaCEP = await fetch('https://viacep.com.br/ws/01001000/json/')
    const consultaCEPConvertida = await consultaCEP.json()

    console.log(consultaCEPConvertida);
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
