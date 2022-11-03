// utilizando classes para criar o servidor e o cliente para rodar o arquivo index.html

import express from 'express';
import http from 'http';
import path from 'path';
import socketio from 'socket.io';

class Server {
  public app: express.Application;
  public server: http.Server;
  public io: socketio.Server;

  constructor() {
    this.app = express();
    this.server = http.createServer(this.app);
    this.io = socketio(this.server);

    this.listen();
  }

  private listen(): void {
    this.server.listen(3333);
  }
}

const server = new Server();

server.app.use(express.static(path.join(__dirname, '..', 'public')));

server.io.on('connection', socket => {
  console.log('New connection', socket.id);
}

// Language: typescript
