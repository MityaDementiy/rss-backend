/* eslint-disable import/prefer-default-export */
export const addChannel = (req, res) => {
  const { url: channelUrl } = req.body;
  res.send(`You have signed up channel: ${channelUrl}`);
};
