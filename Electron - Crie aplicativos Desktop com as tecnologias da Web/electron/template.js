const { ipcMain } = require('electron');
const data = require('./data');

module.exports = {
  trayTemplate: [{ label: 'Cursos' }, { type: 'separator' }],
  geraTrayTemplate(action) {
    const cursos = data.buscaCursos();

    cursos.forEach((curso) => {
      const menuItem = {
        label: curso,
        type: 'radio',
        click: () => action(curso),
      };

      this.trayTemplate.push(menuItem);
    });

    return this.trayTemplate;
  },
  adicionaCursoNoTray(curso, action) {
    const menuItem = {
      label: curso,
      type: 'radio',
      checked: true,
      click: () => action(curso),
    };

    this.trayTemplate.push(menuItem);

    return this.trayTemplate;
  },
  geraMenuPrincipalTemplate(appName) {
    let templateMenu = [
      {
        role: 'viewMenu',
        submenu: [{ role: 'reload' }, { role: 'toggledevtools' }],
      },
      {
        role: 'windowMenu',
        submenu: [{ role: 'minimize' }, { role: 'close' }],
      },
      {
        label: 'Sobre',
        submenu: [
          {
            label: 'Sobre o Alura Timer',
            click: () => ipcMain.emit('abrir-janela-sobre'),
            accelerator: 'CommandOrControl+I',
          },
        ],
      },
    ];

    if (process.platform === 'darwin') {
      templateMenu.unshift({
        label: appName,
        submenu: [{ label: 'Estou rodando no Mac!' }],
      });
    }

    return templateMenu;
  },
};
