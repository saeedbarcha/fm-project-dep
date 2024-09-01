const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432, // Default to 5432 if not set
    dialect: 'postgres',
    logging: false, // Disable logging for development
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // Accept self-signed certificates
      },
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000, // Maximum time (in milliseconds) that pool will try to get connection before throwing error
      idle: 10000, // Maximum time (in milliseconds) that a connection can be idle before being released
    },
  }
);

module.exports = { sequelize };
