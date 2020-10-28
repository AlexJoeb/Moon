// Update with your config settings.
require('dotenv').config();
const { DATABASE_URL } = process.env;
const struct = {
  client: 'pg',
  connection: DATABASE_URL,
  pool: {
    min: 2,
    max: 10
  },
  seeds: {
    directory: './data/seeds',
  },
  migrations: {
    directory: './data/migrations',
  }
};

module.exports = {
  development: struct,
  staging: struct,
  production: struct,
};
