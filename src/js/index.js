    /* 
    OBJETIVO 1 - quando passar o mouse em cima do personagem tem que: 
        - colocar a classe selecionada no personagem que passamos o mouse em cime, para adionar a animação nele
        - retirar a classe selecionado do personagem que esta selecionado
    OBJETIVO 2 - quando passar o mouse em cima do personagem da listagem, trocar a imagem e nome do personagem grande
        - alterar a imagem do jogador 1
        - alterar o nome do jogador 1
    */

    const personagens = document.querySelectorAll('.personagem')
    personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

    const idSelecionado = personagem.attributes.id.value;

    if(idSelecionado === 'ultron')  return;

    const personagemSelecionado = document.querySelector('.selecionado')
    personagemSelecionado.classList.remove('selecionado')
    personagem.classList.add('selecionado')
        
    const imagemJogador1 = document.getElementById('personagem-jogador-1');
    imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;

    const nomeJogador1 = document.getElementById('nome-jogador-1');
    const nomeSelecionado = personagem.getAttribute('data-name');
    nomeJogador1.innerHTML = nomeSelecionado;

    })
})
