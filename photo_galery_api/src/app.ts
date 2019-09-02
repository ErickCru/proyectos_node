import express from 'express';
import morgan from 'morgan';
import path from 'path';

const app = express();

import indexRoutes from './routes/index';

// Settings
app.set('port', process.env.port || 5000);

// middlewares
app.use(morgan('dev'));
app.use(express.json());

// routes
app.use('/api', indexRoutes);

// this folder for this app will be used to store public files
app.use('/uploads', express.static(path.resolve('uploads')));

export default app;
