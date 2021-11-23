const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

app.on('ready', () => onReady());
app.on('window-all-closed', () => onAllClosed());

function onReady() {
  const mainWindow = new BrowserWindow({
    width: 600,
    height: 400,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  loadResource(mainWindow, 'index.html');
}

function onAllClosed() {
  if (process.platform !== 'darwin') app.quit();
}

function loadResource(window, resouceName) {
  if (process.env.NODE_ENV === 'dev') {
    window.webContents.openDevTools();
    window.loadURL('http://localhost:3000/' + resouceName);
  } else {
    window.loadFile('bin/' + resouceName);
  }
}

let sobreWindow = null;
ipcMain.on('abrir-janela-sobre', () => {
  if (sobreWindow) {
    sobreWindow.focus();
    return;
  }

  sobreWindow = new BrowserWindow({
    width: 300,
    height: 220,
    alwaysOnTop: true,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  loadResource(sobreWindow, 'sobre.html');

  sobreWindow.on('closed', () => {
    sobreWindow = null;
  });
});

ipcMain.on('fechar-janela-sobre', () => {
  if (sobreWindow) sobreWindow.close();
});
