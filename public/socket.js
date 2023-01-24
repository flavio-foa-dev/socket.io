const socket = io();
console.log(socket)

const textArea = document.getElementById('editor-texto')
const paramsUrl = new URLSearchParams(window.location.search)
const nameDocument = paramsUrl.get('nome')
console.log(nameDocument)

const titleDocument = document.getElementById('titulo-documento')
titleDocument.textContent = `Titulo ${nameDocument}`


socket.emit('title-document', nameDocument)

textArea.addEventListener('keyup', () => {
  socket.emit('textArea', textArea.value, nameDocument)
});

socket.on('dataDocument', (text) => {
  textArea.value = text
})

socket.on('textClient', (text) => {
  textArea.value = text
})