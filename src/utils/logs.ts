import chalk from 'chalk';

const SALT_LINE = '\n-----------------------';

export const messageError = (...args: any[]) => {
  args.forEach((a) => console.log(chalk.red(a), SALT_LINE));
};

export const messageGreen = (...args: any[]) => {
  args.forEach((a) => console.log(chalk.green(a), SALT_LINE));
};

export const messageYellow = (...args: any[]) => {
  args.forEach((a) => console.log(chalk.yellow(a), SALT_LINE));
};

export const messageMagenta = (...args: any[]) => {
  args.forEach((a) => console.log(chalk.magenta.bold(a), SALT_LINE));
};
