require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    connection: process.env.LOCAL_DB_URL
  }
};
