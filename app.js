import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import passport from 'passport';
import BearerStrategy from 'passport-http-bearer';

import connectDB from './config/db.js';
import usersRouter from './src/routes/users.js';
import User from './src/models/user.js';

const app = express();

dotenv.config();

const port = process.env.PORT ?? 8080;

passport.use(new BearerStrategy(
  async (token, done) => {
    try {
      const user = await User.findOne({ token });

      if (!user) {
        return done(null, false);
      }

      return done(null, user, { scope: 'all' });
    } catch (error) {
      return done(error);
    }
  },
));

app.use(passport.initialize());

app.use('/api', cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(express.json());
app.use('/api', passport.authenticate('bearer', { session: false }), usersRouter);

connectDB();

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App is listening at http://localhost:${port}`);
});
