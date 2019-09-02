export const getNumberOfUsers = users => {
  const usersList = new Set();
    if (users) {
      users.map(user => (usersList.add(user.user)))
      return usersList.size
    }
}