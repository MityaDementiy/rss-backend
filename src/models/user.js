import mongoose from 'mongoose';

const ChannelSchema = new mongoose.Schema({
  name: String,
  url: String,
});

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  token: String,
  channels: [ChannelSchema],
});

const User = mongoose.model('User', UserSchema);

export default User;
