/* eslint-disable import/prefer-default-export */
export const addChannel = (req, res) => {
  const { name: channelName } = req.body;
  res.send(`You have signed up channel: ${channelName}`);
};
