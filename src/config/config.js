const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  development: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.DB_NAME,
    host:   process.env.DB_HOST || "localhost",
    dialect: "postgres",
    port:Number(process.env.DB_PORT),
    logging:false,
    saltRound: process.env.SALT_ROUND || 10
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
    saltRound: process.env.SALT_ROUND || 10
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
    saltRound: process.env.SALT_ROUND || 10
  },
};
