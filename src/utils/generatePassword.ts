import { generate } from 'generate-password';
import { passwordGeneratorInterface } from '../interfaces/generatePassword.interface';

export const generatePassword = ({ length, numbers }: passwordGeneratorInterface): string => {
  return generate({ length, numbers });
};
