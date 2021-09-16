"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const email_templates_1 = __importDefault(require("email-templates"));
const logs_1 = require("../utils/logs");
const { MAILING_USER, MAILING_PASS } = process.env;
const transporter = nodemailer_1.default.createTransport({
    port: 587,
    secure: false,
    service: 'gmail',
    requireTLS: true,
    auth: {
        user: MAILING_USER,
        pass: MAILING_PASS,
    },
});
const email = new email_templates_1.default({
    send: true,
    preview: false,
    transport: transporter,
});
const emailService = ({ to, subject, template }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const info = yield email.send({
            template: template,
            locals: { subject },
            message: { to, from: MAILING_USER },
        });
        logs_1.messageMagenta('Message sent: %s', info.messageId);
        return { success: true, messageId: info.messageId };
    }
    catch (error) {
        throw error;
    }
});
exports.default = emailService;
