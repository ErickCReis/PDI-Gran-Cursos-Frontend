const data = require('./data');

module.exports = {
  geraTrayTemplate(action) {
    const template = [
      { label: 'Cursos' },
      { type: 'separator' },
    ];

    const cursos = data.buscaCursos();

    cursos.forEach((curso) => {
      menuItem = {
        label: curso,
        type: 'radio',
        click: () => action(curso)
      };

      template.push(menuItem);
    });

    return template;
  },
}