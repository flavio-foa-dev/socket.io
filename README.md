# socket.io

Diferenciar o protocolo HTTP do WebSockets:

O protocolo HTTP trabalha com o modelo requisição-resposta, que não é adequado para aplicações

quando queremos criar uma comunicação bidirecional e em tempo real entre cliente e servidor. Para esses casos, utilizamos o protocolo WebSockets.

Criar um servidor Socket.IO com Express e conectar um cliente:

Utilizamos o método io.on(), que recebe como primeiro parâmetro o nome do evento (por exemplo, “connection”) e como segundo parâmetro uma função callback, que será executada assim que o evento for escutado.




Entretanto, uma atenção especial deve ser tomada para os tipos Map e Set do JavaScript. Eles não são serializados corretamente se utilizarmos JSON.stringify(), mas possuem métodos próprios para serialização.

Um objeto Map pode ser serializado e desserializado com o seguinte código:

const mapa = new Map();

const mapaSerializado = [...mapa.entries()];

const mapaOriginal = new Map(mapaSerializado);


De forma semelhante, um objeto Set pode ser serializado e desserializado com o seguinte código:

const set = new Set();

const setSerializado = [...set.keys()];

const setOriginal = new Set(setSerializado);


O tipo Date também merece atenção especial. Ao enviar um objeto Date como dado de um evento, ele será convertido para sua representação em string (por exemplo, 2022-11-03T19:11:54.073Z).

const dataStr = "2022-11-03T19:11:54.073Z";

const data = new Date(dataStr);


Emitir evento a partir do cliente:

No front-end, utilizamos socket.emit() para emitir o evento "<nome-do-evento>" para o servidor, junto com o texto que foi digitado.
Emitir um evento para vários clientes a partir do servidor:

No back-end, com io.emit(), podemos emitir um evento para todos os clientes ou, com socket.broadcast.emit(), podemos emitir para todos os clientes, exceto o cliente que está emitindo o evento.

