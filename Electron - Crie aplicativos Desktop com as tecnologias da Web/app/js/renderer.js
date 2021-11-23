const timer = require('./timer');

const linkSobre = document.querySelector('#link-sobre');
const botaoPlay = document.querySelector('.botao-play');
const tempo = document.querySelector('.tempo');

linkSobre.addEventListener('click', async () => {
  window.api.ipcRenderer.send('abrir-janela-sobre');
});

const imgs = ['img/play-button.svg', 'img/stop-button.svg'];
let play = false;
botaoPlay.addEventListener('click', () => {
  imgs.reverse();
  play ? timer.parar() : timer.iniciar(tempo)
  play = !play;
  botaoPlay.src = imgs[0];
});