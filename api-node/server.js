const express  = require('express');
const cors = require('cors');

const { routes } = require('./Routes');

const server = express();
server.use(express.json());
server.use(cors({
  origin: '*'
}));
server.use(routes);

server.listen(3001, () => console.log("🚀 IGNITE"));