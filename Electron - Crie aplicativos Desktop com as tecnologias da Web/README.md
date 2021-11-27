## Electron: Crie aplicativos Desktop com as tecnologias da Web

### Aula 01: Introdução

- O que é a tecnologia Electron
- Os 2 pilares que sustentam o Electron: Node.js e Chromium
- Como instalar e configurar o Electron
- Importar apenas as partes necessárias do Electron
- Como criar uma janela através da classe BrowserWindow
- Como carregar URL externa via protocolo HTTP
- Como carregar URL interna via protolo FILE
- A variável implícita ___dirname_ do Node.js
- 2 tipos de processo numa aplicação Electron: o principal, que controla o ciclo de vida da - aplicação, e o processo de render, composto pelas janelas

### Aula 02: Comunicação entre processos e janelas

- Realizar comunicação entre processos com ipcMain e ipcRenderer
- Criar nova janela
- Algumas propriedades de janelas
- Lidar com o fechamento de janelas
- Interagir com o Shell do sistema operacional

### Aula 03: Implementando o timer

- Executar e parar um timer
- Criar nosso próprio módulo
- Formas diferentes de importar scripts em index.html

### Aula 04: Salvando os dados do curso

- A criar um módulo responsável pela persistência de nossos dados
- Como utilizar a biblioteca jsonfile para criar JSON's
- A possibilidade de utilizar módulos nativos do Node, como o fs

### Aula 05 - Adicionando a aplicação ao Tray

- Utilizar o submódulo Tray
- Criar menus para o Tray
- Comunicar-se do processo principal para um processo de render.