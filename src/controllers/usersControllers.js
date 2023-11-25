/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import xml2js from 'xml2js';

import createDocument from '../helpers/createDocument.js';
import User from '../models/user.js';

export const createUser = async (req, res) => {
  try {
    const user = await createDocument(User, req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addChannelToUser = async (req, res) => {
  const { channel } = req.body;
  const { username } = req.params;

  try {
    const user = await User.findOneAndUpdate(
      { username },
      { $push: { channels: channel } },
      { new: true },
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getUserChannelsFeeds = async (req, res) => {
  const { username } = req.params;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const parser = new xml2js.Parser();
    const channelResponses = await Promise.all(
      user.channels.map(async ({ url }) => {
        const response = await axios.get(url);
        const json = await parser.parseStringPromise(response.data);
        return json;
      }),
    );

    return res.json(channelResponses);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
