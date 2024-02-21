// server.js

import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors'

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

io.on('connection', (socket) => {
  console.log('A user connected');

  // Listening for incoming messages from clients
  socket.on('message', (message) => {
    // Broadcasting the message to all connected clients
    io.emit('message', message);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
