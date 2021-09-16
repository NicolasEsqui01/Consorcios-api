import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

const { DB_PORT, DB_NAME, DB_HOST, POSTGRES_USER, POSTGRES_PASSWORD } = process.env;

const db = new Sequelize(
  DB_NAME || 'consorcioapi',
  POSTGRES_USER || 'postgres',
  POSTGRES_PASSWORD || 'postgres',

  {
    logging: false,
    dialect: 'postgres',
    port: Number(DB_PORT),
    host: DB_HOST || 'localhost',
  }
);

export default db;
