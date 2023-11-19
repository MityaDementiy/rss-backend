import express from 'express';

import channelsRouter from './src/routes/channels.js';

const app = express();

const port = process.env.PORT ?? 8080;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(express.json());
app.use('/api', channelsRouter);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App is listening at http://localhost:${port}`);
});
