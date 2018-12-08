import express from 'express';
import morgan from 'morgan';
import { errorHandler } from '../middleware/error';
import spa from '../middleware/spa';
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('../client/dist'));

app.use('*', spa('../client/dist/index.html'));

app.use(errorHandler);

export default app;
