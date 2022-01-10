import 'reflect-metadata';

import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';

import cors from 'cors';

import { errors } from 'celebrate';

import { router } from './routes';
import { AppError } from '@shared/errors/AppError';

import '@shared/typeorm';

const app = express();

app.use(cors());
app.use(express.json());

app.use(router);

app.use(errors());

app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${error.message}`,
    });
  },
);

app.listen(3333, () => {
  console.log('Server is running on port 3333');
});
