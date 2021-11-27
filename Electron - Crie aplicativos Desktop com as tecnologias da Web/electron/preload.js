const { contextBridge, ipcRenderer, shell } = require('electron');
const process = require('process');
const data = require('./data');

contextBridge.exposeInMainWorld('api', {
  ipcRenderer: {
    on: async (channel, listener) => ipcRenderer.on(channel, listener),
    once: async (channel, listener) => ipcRenderer.once(channel, listener),
    send: async (channel, ...args) => ipcRenderer.send(channel, ...args),
  },

  shell: {
    openExternal: async (url) =>  shell.openExternal(url),
  },

  process: {
    versions: process.versions,
  },

  data: {
    buscaDadosCurso: (curso) => data.buscaDadosCurso(curso),
  }
});
