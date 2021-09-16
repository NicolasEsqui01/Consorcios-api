import nodemailer from 'nodemailer';
import Email from 'email-templates';
import { messageMagenta } from '../utils/logs';
import { IEmailService } from '../interfaces/IEmailService.interface';

const { MAILING_USER, MAILING_PASS } = process.env;

const emailService = async ({ to, subject, template, password, dni, name}: IEmailService) => {
  const transporter = nodemailer.createTransport({
    port: 587,
    secure: false,
    service: 'gmail',
    requireTLS: true,
    host: 'smtp.gmail.com',
    auth: {
      user: MAILING_USER,
      pass: MAILING_PASS,
    },
  });

  const email = new Email({
    send: true,
    preview: false,
    transport: transporter,
  });

  try {
    const info = await email.send({
      template: template,
      locals: { subject, password, dni, name },
      message: { to, from: MAILING_USER, subject },
    });

    messageMagenta('Message sent: %s', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    throw error;
  }
};

export default emailService;
