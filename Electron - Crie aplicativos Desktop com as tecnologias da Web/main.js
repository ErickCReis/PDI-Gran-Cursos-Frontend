const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
  console.log('ready');
  const mainWindow = new BrowserWindow({
    width: 600,
    height: 400,
  });

  mainWindow.loadFile('app/index.html');
});

app.on('window-all-closed', () => {
  app.quit();
})