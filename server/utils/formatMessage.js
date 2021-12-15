const formatMessage = (username, message) => {
  const currentDate = new Date();
  const time = currentDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return { username, message, time };
};

module.exports = formatMessage;
