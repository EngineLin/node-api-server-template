import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import stylus from 'stylus';

import indexRouter from './src/routes/index'
import usersRouter from './src/routes/users'

const server = express();
const port = process.env.PORT || '3000';

server.use(logger('dev'));
server.use(express.json());
server.use(express.urlencoded({extended: false}));
server.use(cookieParser());
server.use(stylus.middleware(path.join(__dirname, 'public')));
server.use(express.static(path.join(__dirname, 'public')));

server.use('/', indexRouter);
server.use('/users', usersRouter);

server.listen(port, () => {
    console.log(
      '*************\n' +
      `server start: http://localhost:${port}\n` +
      '*************'
    );
});
