import express from "express";
import { createServer } from "http";
import { Server, Socket} from "socket.io";
import path from "path"; //permite construir o caminho de arquivos

import "./database";
import { routes } from "./routes";

const app = express();

//Configurando view
app.use(express.static(path.join(__dirname,"..","public")));
app.set("views", path.join(__dirname,"..","public"));
app.engine("html",require("ejs").renderFile);
app.set("view engine", "html");

app.get("/pages/client", (req,res)=>{
    return res.render("html/client.html");
})

const http = createServer(app); //Criando protocolo http
const io = new Server(http); //Criando protocolo websocket

io.on("connection",(socket:Socket)=>{
    console.log("Se conectou:", socket.id);
})

app.use(express.json())

app.use(routes);

export { http, io };