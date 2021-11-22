const linkSobre = document.querySelector('#link-sobre');

linkSobre.addEventListener('click', () => {
  window.plataform.ipcRenderer.send('abrir-janela-sobre');
});