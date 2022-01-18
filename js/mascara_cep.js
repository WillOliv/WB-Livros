const cep = document.getElementById('cep')

cep.addEventListener('keypress', () => {
    let tamanho = cep.value.length

    if (tamanho === 5) {
        cep.value += "-"
    }
})
