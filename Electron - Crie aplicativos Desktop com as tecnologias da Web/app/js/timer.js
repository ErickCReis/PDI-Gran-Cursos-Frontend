const { DateTime } = require('luxon');

let tempo;
let timer;
module.exports = {
  iniciar(el) {
    const [hours, minutes, seconds] = el.textContent.split(':');
    tempo = DateTime.fromObject({ hours, minutes, seconds });

    timer = setInterval(() => {
      tempo = tempo.plus({ seconds: 1 })
      el.textContent = tempo.toFormat('HH:mm:ss');
    }, 1000);
  },
  parar(curso) {
    clearInterval(timer);
    if (!tempo) return;


    window.api.ipcRenderer.send('tempo-parado', curso, tempo.toFormat('HH:mm:ss'));
  }
};
