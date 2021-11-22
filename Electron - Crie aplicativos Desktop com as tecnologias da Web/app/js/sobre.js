const linkFechar = document.querySelector('#link-fechar');
const linkGithub = document.querySelector('#link-github');
const versaoElectron = document.querySelector('#versao-electron');

window.onload = function() {
  versaoElectron.textContent = window.plataform.process.versions.electron;
}

linkFechar.addEventListener('click', () => {
  window.plataform.ipcRenderer.send('fechar-janela-sobre');
});

linkGithub.addEventListener('click', () => {
  window.plataform.shell.openExternal('https://github.com/ErickCReis');
});

