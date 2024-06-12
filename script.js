const perguntas = [
    { texto: "Que dia começamos a namorar? (em números)", resposta: "12" },
    { texto: "Quantos meses completamos hoje? (em números)", resposta: "5" },
    { texto: "Vai casar comigo? (Sim ou não)", resposta: "Sim" },
    { texto: "Vai me amar sempre do mesmo modo, sem oscilação? (Sim ou não)", resposta: "Sim" }
];

let indicePerguntaAtual = 0;
let respostasCorretas = 0;

function iniciarDesafio() {
    const formulario = document.getElementById('formulario');
    const perguntaLabel = document.getElementById('pergunta');
    const mensagemDiv = document.getElementById('mensagem');
    const botaoFormulario = document.querySelector('.botao-entrar');
    const botaoVideo = document.querySelector('.botao-video');
    const container = document.querySelector('.container');

    formulario.style.display = 'block';
    mensagemDiv.textContent = '';
    botaoFormulario.style.display = 'none';
    botaoVideo.style.display = 'none';

    if (indicePerguntaAtual < perguntas.length) {
        perguntaLabel.textContent = perguntas[indicePerguntaAtual].texto;
    } else {
        perguntaLabel.textContent = "Desafio concluído!";
        formulario.style.display = 'none';
        mensagemDiv.textContent = "Eu também prometo amor";
        botaoVideo.style.display = 'block';
        container.style.backgroundColor = '#b3d9ff'; /* Mudança para tons de azul */
        abrirSite();
    }
}

function verificarResposta() {
    const respostaInput = document.getElementById('resposta');
    const respostaDigitada = respostaInput.value.trim();
    const respostaCorreta = perguntas[indicePerguntaAtual].resposta;
    if (respostaDigitada.toLowerCase() === respostaCorreta.toLowerCase()) {
        respostasCorretas++;
    }
    indicePerguntaAtual++;
    respostaInput.value = '';
    iniciarDesafio();
}

function abrirSite() {
    const musica = document.getElementById('musica');
    musica.play();
}

function abrirVideo() {
    
        window.location.href = "https://www.youtube.com/shorts/_2uOKHVCHLg";
    
}