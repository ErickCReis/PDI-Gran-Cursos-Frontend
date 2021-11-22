const { contextBridge, ipcRenderer, shell } = require('electron');
const process = require('process');

contextBridge.exposeInMainWorld('plataform', {
  ipcRenderer: {
    on: async (channel, listener) => ipcRenderer.on(channel, listener),
    once: async (channel, listener) => ipcRenderer.once(channel, listener),
    send: async (channel, args) => ipcRenderer.send(channel, args),
  },

  shell: {
    openExternal: async (url) => shell.openExternal(url),
  },

  process: {
    versions: process.versions,
  },
});
