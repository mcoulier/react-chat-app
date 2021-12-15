const formatMessage = (username, message) => {
  const currentDate = new Date();
  const time = currentDate.toLocaleTimeString("en-US");
  return { username, message, time };
};

module.exports = formatMessage;
