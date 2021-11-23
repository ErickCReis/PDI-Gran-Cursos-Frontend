const linkFechar = document.querySelector('#link-fechar');
const linkGithub = document.querySelector('#link-github');
const versaoElectron = document.querySelector('#versao-electron');

window.onload = function() {
  versaoElectron.textContent = window.api.process.versions.electron;
}

linkFechar.addEventListener('click', () => {
  window.api.ipcRenderer.send('fechar-janela-sobre');
});

linkGithub.addEventListener('click', () => {
  window.api.shell.openExternal('https://github.com/ErickCReis');
});

