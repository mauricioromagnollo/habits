import 'reflect-metadata';
import 'dotenv/config';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import '../database/connection';

import { AppError } from '../error/app-error';
import { routes } from '../routes';

const app = express();

const { SERVER_PORT } = process.env;

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(
  (err: Error, _request: Request, response: Response, _: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

app.listen(SERVER_PORT, () => {
  console.log(`[*] Server started on port ${SERVER_PORT}...`);
});
