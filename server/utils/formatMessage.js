const { v4: uuidv4 } = require("uuid");

const formatMessage = (username, message) => {
  const id = uuidv4();
  const currentDate = new Date();
  const time = currentDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return { id, username, message, time };
};

module.exports = formatMessage;
