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

### Aula 06 - Um formulário para adicionar cursos

- A criar um formulário para novos dados dos cursos
- A utilizar ainda mais a biblioteca Jsonfile
- Como modificar nosso Traybar dinamicamente

### Aula 07 - O menu principal da aplicação

- O menu principal da aplicação
- Detalhes específicos do MacOS na criação do menu principal da aplicação
- Como criar submenus e detectar ações de click
- Utilizando Roles para implementar funcionalidades prontas do sistema operacional
- Como emitir eventos do Processo Principal para o próprio Processo Principal

### Aula 08 - Adicionando atalhos a aplicação

- Adicionado atalhos para os itens do Menu
- Alterando atalhos pré-existentes no Menu
- Atalhos globais que funcionam mesmo que a aplicação não esteja focada.

### Aula 09 - Distribuição para os três Sistemas Operacionais

- Correção de alguns bugs da aplicação
- Gerar um executável para cada sistema operacional com o electron-packager
- Gerar um executável para cada sistema operacional com o ícone específico do sistema