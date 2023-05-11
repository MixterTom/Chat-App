import express from 'express';
import dotenv from 'dotenv';

import { serverConfig } from './src/config/server.config.js';
import app from './src/app.js';
import {client} from "./src/database/connect.js"

dotenv.config();
const server = express();

server.use(app);
server.listen(serverConfig.port);