const timer = require('./timer');

const linkSobre = document.querySelector('#link-sobre');
const botaoPlay = document.querySelector('.botao-play');
const tempo = document.querySelector('.tempo');
const curso = document.querySelector('.curso');
const botaoAdicionar = document.querySelector('.botao-adicionar');
const campoAdicionar = document.querySelector('.campo-adicionar');

window.onload = () => {
  window.api.data.buscaDadosCurso(curso.textContent).then((dados) => {
    tempo.textContent = dados.tempo;
  });
};

window.api.ipcRenderer.on('curso-trocado', (_, novoCurso) => {
  curso.textContent = novoCurso;
  window.api.data.buscaDadosCurso(novoCurso).then((dados) => {
    tempo.textContent = dados.tempo;
  });
});

window.api.ipcRenderer.on('atalho-iniciar-parar', () => {
  botaoPlay.dispatchEvent(new MouseEvent('click'));
});

linkSobre.addEventListener('click', async () => {
  window.api.ipcRenderer.send('abrir-janela-sobre');
});

const imgs = ['img/play-button.svg', 'img/stop-button.svg'];
let play = false;
botaoPlay.addEventListener('click', () => {
  imgs.reverse();
  play ? timer.parar(curso.textContent) : timer.iniciar(tempo);
  play = !play;
  botaoPlay.src = imgs[0];

  new Notification('Alura Timer', {
    body: `O curso ${curso.textContent} foi ${play ? 'iniciado' : 'parado'}`,
    icon: play ? 'img/play-button.png' : 'img/stop-button.png',
  });
});

botaoAdicionar.addEventListener('click', () => {
  const novoCurso = campoAdicionar.value;
  curso.textContent = novoCurso;
  tempo.textContent = '00:00:00';
  campoAdicionar.value = '';

  window.api.ipcRenderer.send('curso-adicionado', novoCurso);
});