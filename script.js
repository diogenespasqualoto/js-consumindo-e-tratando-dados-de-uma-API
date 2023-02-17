const consultaCEP = fetch('https://viacep.com.br/ws/010010030/json/')
    .then(resposta => resposta.json())
    .then(r => {
        if(r.erro){
            throw Error('esse cep não existe!')
        }
        console.log(r)})
    .catch(erro=> console.log(erro))

console.log(consultaCEP)
