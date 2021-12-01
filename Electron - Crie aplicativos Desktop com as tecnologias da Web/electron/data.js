const jsonfile = require('jsonfile-promised');
const fs = require('fs');

module.exports = {
  salvaDados(curso, tempo) {
    const caminhoCurso = `${__dirname}/data/${curso}.json`;

    if (fs.existsSync(caminhoCurso)) {
      this.adicionaTempo(caminhoCurso, tempo);
      return;
    }

    this.criaArquivoDeCurso(caminhoCurso, tempo).then(() => {
      this.adicionaTempo(caminhoCurso, tempo);
    });
  },
  adicionaTempo(caminhoCurso, tempo) {
    const dados = {
      ultimoEstudo: new Date().toString(),
      tempo
    }

    jsonfile
      .writeFile(caminhoCurso, dados, { spaces: 2 })
      .then(() => console.log('Tempo salvo!'))
      .catch((err) => console.error(err));
  },
  criaArquivoDeCurso(nomeArquivo, conteudoArquivo) {
    return jsonfile
      .writeFile(nomeArquivo, conteudoArquivo)
      .then(() => console.log('Arquivo criado!'))
      .catch((err) => console.error(err));
  },
  buscaDadosCurso(curso) {
    const caminhoCurso = `${__dirname}/data/${curso}.json`;

    return jsonfile.readFile(caminhoCurso)
  },
  buscaCursos() {
    const arquivos = fs.readdirSync(`${__dirname}/data`);
    return arquivos.map((arquivo) => arquivo.replace(/.json$/, ''));
  }
};
