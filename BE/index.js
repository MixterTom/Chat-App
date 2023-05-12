import http from 'http';
import express from 'express';
import dotenv from 'dotenv';
import { Server, Socket } from 'socket.io';

import { serverConfig } from './src/config/serverConfig.js';
import app from './src/app.js';
import postController from './src/controllers/postController.js';

dotenv.config();
const expressServer = express();

expressServer.use(app);

const httpServer = http.createServer(expressServer).listen(serverConfig.port, () =>
  console.log(`Server started on ${serverConfig.port}`)
);

const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
    credentials: true,
  },
});

global.onlineUsers = new Map();

io.on('connection', (socket) => {
  global.chatSocket = socket;
  socket.on('add-user', (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  socket.on('send-messages', (data) => {
    console.log(data);
    postController.create(data);
    socket.emit("messages-recieve", data.message);
  });
});
