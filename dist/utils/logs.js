"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageMagenta = exports.messageYellow = exports.messageGreen = exports.messageError = void 0;
const chalk_1 = __importDefault(require("chalk"));
const SALT_LINE = '\n-----------------------';
const messageError = (...args) => {
    args.forEach((a) => console.log(chalk_1.default.red(a), SALT_LINE));
};
exports.messageError = messageError;
const messageGreen = (...args) => {
    args.forEach((a) => console.log(chalk_1.default.green(a), SALT_LINE));
};
exports.messageGreen = messageGreen;
const messageYellow = (...args) => {
    args.forEach((a) => console.log(chalk_1.default.yellow(a), SALT_LINE));
};
exports.messageYellow = messageYellow;
const messageMagenta = (...args) => {
    args.forEach((a) => console.log(chalk_1.default.magenta.bold(a), SALT_LINE));
};
exports.messageMagenta = messageMagenta;
