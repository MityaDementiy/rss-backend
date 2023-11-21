/* eslint-disable no-console */
import mongoose from 'mongoose';

const connectDB = () => {
  const connectionString = process.env.MONGO_URI;

  if (!connectionString) {
    console.error('Mongo URI not found!');
    process.exit(1);
  }

  mongoose.connect(connectionString);
  const db = mongoose.connection;

  db.on('error', (err) => {
    console.error('MongoDB connection error: ', err);
    process.exit(1);
  });

  db.once('open', () => {
    console.log('MongoDB connected.');
  });
};

export default connectDB;
