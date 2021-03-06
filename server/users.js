const users = [];

const addUser = ({ id, username, room }) => {
  const existingUser = users.find(
    (user) => user.room === room && user.username === username
  );
  if (existingUser) {
    return { error: "Username already taken, try again." };
  }

  const user = { id, username, room };
  users.push(user);
  console.log("USERS: " + JSON.stringify(users));

  return { user };
};

const removeUser = (id) => {
  const userIndex = users.findIndex((user) => user.id === id);

  users.splice(userIndex, 1);
};

const getUser = (id) => users.find((user) => user.id === id);

module.exports = { addUser, removeUser, getUser };
