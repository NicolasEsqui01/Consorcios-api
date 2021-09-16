export interface IEmailService {
  to: string;
  subject: string;
  template: 'admin-register' | 'user-register';
  dni: string;
  name: string;
  password: string;
};
