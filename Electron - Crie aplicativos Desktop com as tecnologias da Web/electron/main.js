const { app, BrowserWindow, ipcMain, Tray, Menu, globalShortcut } = require('electron');
const path = require('path');
const data = require('./data');
const templateGenerator = require('./template');

app.on('ready', () => onReady());
app.on('window-all-closed', () => onAllClosed());

let mainWindow = null;
let tray = null;

function onReady() {
  mainWindow = new BrowserWindow({
    icon: path.join(__dirname, 'assets', 'icon.png'),
    width: 600,
    height: 400,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  loadTray();
  loadMenuPricipal();
  loadGlobalShortcut();
  loadResource(mainWindow, 'index.html');
}

function onAllClosed() {
  if (process.platform !== 'darwin') app.quit();
}

function loadResource(window, resouceName) {
  if (process.env.NODE_ENV === 'dev') {
    window.webContents.openDevTools();
    window.loadURL(getResource(resouceName));
  } else {
    window.loadFile(getResource(resouceName));
  }
}

function getResource(resourceName) {
  if (process.env.NODE_ENV === 'dev') {
    return 'http://localhost:3000/' + resourceName;
  } else {
    return path.join(__dirname, 'bin', resourceName);
  }
}

function loadTray(curso) {
  if (!tray) {
    tray = new Tray(path.join(__dirname, 'assets', 'icon-tray.png'));
  }

  const action = (nomeCurso) => {
    mainWindow.send('curso-trocado', nomeCurso);
  };

  let template;
  if (curso) {
    template = templateGenerator.adicionaCursoNoTray(curso, action);
  } else {
    template = templateGenerator.geraTrayTemplate(action);
  }
  const contextMenu = Menu.buildFromTemplate(template);

  tray.setContextMenu(contextMenu);
}

function loadMenuPricipal() {
  const templateMenu = templateGenerator.geraMenuPrincipalTemplate(app.getName());
  const menuPrincipal = Menu.buildFromTemplate(templateMenu);
  Menu.setApplicationMenu(menuPrincipal);
}

function loadGlobalShortcut() {
  globalShortcut.register('CommandOrControl+Shift+S', () => {
    mainWindow.send('atalho-iniciar-parar');
  })
}

let sobreWindow = null;
ipcMain.on('abrir-janela-sobre', () => {
  if (sobreWindow) {
    sobreWindow.focus();
    return;
  }

  sobreWindow = new BrowserWindow({
    icon: path.join(__dirname, 'assets', 'icon.png'),
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

ipcMain.on('tempo-parado', (_, curso, tempo) => {
  data.salvaDados(curso, tempo);
});

ipcMain.on('curso-adicionado', (_, novoCurso) => {
  loadTray(novoCurso);
});
