"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const sequelize_1 = require("sequelize");
dotenv_1.default.config();
const { DB_PORT, DB_NAME, DB_HOST, POSTGRES_USER, POSTGRES_PASSWORD } = process.env;
const db = new sequelize_1.Sequelize(DB_NAME || 'consorcioapi', POSTGRES_USER || 'postgres', POSTGRES_PASSWORD || 'postgres', {
    logging: false,
    dialect: 'postgres',
    port: Number(DB_PORT),
    host: DB_HOST || 'localhost',
});
exports.default = db;
