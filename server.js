import  express from "express";
import url from "url";
import path from "path";
import http from "http";
import { Server } from "socket.io"

const app = express();
const PORT = process.env.PORT || 3000

const currentPath = url.fileURLToPath(import.meta.url);
const directoryPublic  = path.join(currentPath,"../", "public")
app.use(express.static(directoryPublic))

const serverHttp = http.createServer(app)

serverHttp.listen(PORT, ()=> console.log(`listening on port ${PORT}`));

const io = new Server(serverHttp)
export default io

