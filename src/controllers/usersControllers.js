/* eslint-disable import/prefer-default-export */
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
