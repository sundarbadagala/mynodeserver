function getUsers(users) {
  return users.map((item) => ({ username: item.username, email: item.email }));
}
module.exports = getUsers
