import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import connectDB from './config/db.js';
import channelsRouter from './src/routes/channels.js';
import usersRouter from './src/routes/users.js';

const app = express();

dotenv.config();

const port = process.env.PORT ?? 8080;

app.use('/api', cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(express.json());
app.use('/api', channelsRouter);
app.use('/api', usersRouter);

connectDB();

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App is listening at http://localhost:${port}`);
});
