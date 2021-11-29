const data = require('./data');

module.exports = {
  template: [
    { label: 'Cursos' },
    { type: 'separator' },
  ],
  geraTrayTemplate(action) {
    const cursos = data.buscaCursos();

    cursos.forEach((curso) => {
      const menuItem = {
        label: curso,
        type: 'radio',
        click: () => action(curso)
      };

      this.template.push(menuItem);
    });

    return this.template;
  },
  adicionaCursoNoTray(curso, action) {
    const menuItem = {
      label: curso,
      type: 'radio',
      checked: true,
      click: () => action(curso),
    };

    this.template.push(menuItem);

    return this.template;
  },
}