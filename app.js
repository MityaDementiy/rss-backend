import express from 'express';
import cors from 'cors';

import channelsRouter from './src/routes/channels.js';

const app = express();

const port = process.env.PORT ?? 8080;

app.use('/api', cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(express.json());
app.use('/api', channelsRouter);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App is listening at http://localhost:${port}`);
});
