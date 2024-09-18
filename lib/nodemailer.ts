"use server";

import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import Mail from "nodemailer/lib/mailer";

// console.log(process.env.MAIL_HOST);
// console.log(process.env.MAIL_PORT);
// console.log(process.env.MAIL_USER);
// console.log(process.env.MAIL_PASS);

const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: true, //true
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  logger: true,
  transactionLog: true, 
  allowInternalNetworkInterfaces: false,
} as SMTPTransport.Options);

type sendEmailDTO = {
  sender: Mail.Address;
  receipients: Mail.Address[];
  subject: string;
  message: string;
};

export const sendEmail = async (dto: sendEmailDTO) => {
  const { sender, receipients, subject, message } = dto;

  return transport.sendMail({
    from: sender,
    to: receipients,
    subject,
    html: message,
    text: message,
  });
};
