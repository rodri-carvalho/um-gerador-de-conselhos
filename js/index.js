const botaoGerador = document.getElementById('botao')
const numeroConselho = document.getElementById('numeroConselho')
const textoConselho = document.getElementById('textoConselho')

async function gerarConselho(){
    const resposta = await fetch('https://api.adviceslip.com/advice');
    const conselho = await resposta.json();
    const idDoConselho = `Advice #${conselho.slip.id}`;
    const textoDoConselho = `"${conselho.slip.advice}"`;

    numeroConselho.innerHTML = idDoConselho
    textoConselho.innerHTML = textoDoConselho
}


// botaoGerador.addEventListener('click', gerarConselho)
// gerarConselho()


botaoGerador.addEventListener('click', function(){
    gerarConselho()
})
