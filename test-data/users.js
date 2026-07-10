const USERS = {
  admin: {
    email: process.env.ADMIN_EMAIL || 'abcd@gmail.com',
    password: process.env.ADMIN_PASSWORD || 'abcd12',
  },
  user: {
    email: process.env.USER_EMAIL || 'user1212@gmail.com',
    password: process.env.USER_PASSWORD || 'test1212',
  },
};

module.exports = { USERS };
