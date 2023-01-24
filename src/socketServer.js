import io from "../server.js";

const dataDocuments = [
  {name: "JavaScript", text: "texto de JavaScript"},
  {name: "Node", text: "texto de Node"},
  {name: "Socket.io", text: "texto de Socket.io"},
]


io.on("connection", ((socket) => {
  console.log("connection established whit client", socket.id)

  socket.on('title-document', (title)=> {
    socket.join(title);

    const document = getDocument(title)
    if(document){
      socket.emit('dataDocument',document.text)
    }
    console.log("document", document)
  })

  socket.on("textArea", (text, nameDocument)=> {
    //socket.broadcast.emit("textClient", text)
    const document = getDocument(nameDocument)
    if (document){
      document.text = text
    }
    socket.to(nameDocument).emit("textClient", text)
  });


}))

const getDocument = (title) => {
  return dataDocuments.find(d => d.name === title)
}