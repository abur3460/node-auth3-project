const express = require('express');
const userRouter = require('./users/users-router.js');
const authRouter = require('./auth/auth-router')
const server = express();

server.use(express.json());
server.use('/user', userRouter);
server.use('/auth', authRouter);

server.get('/', (req, res) => {
    res.send("Connected...");
  });

module.exports = server;