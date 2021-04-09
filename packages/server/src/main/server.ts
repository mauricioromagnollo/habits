import 'reflect-metadata';
import 'dotenv/config';

import express from 'express';
import 'express-async-errors';
import cors from 'cors';

const app = express();

const { SERVER_PORT } = process.env;

app.use(cors());
app.use(express.json());

app.listen(SERVER_PORT, () => {
  console.log(`[*] Server started on port ${SERVER_PORT}...`);
});
