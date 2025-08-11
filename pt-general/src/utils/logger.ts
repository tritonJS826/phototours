export enum LogLevel {
  INFO = 'INFO',
  ERROR = 'ERROR',
  WARN = 'WARN',
  DEBUG = 'DEBUG'
}

class Logger {

  public info(message: string, ...args: unknown[]): void {
    // eslint-disable-next-line no-console
    console.log(this.formatMessage(LogLevel.INFO, message, ...args));
  }

  public error(message: string, ...args: unknown[]): void {
    // eslint-disable-next-line no-console
    console.error(this.formatMessage(LogLevel.ERROR, message, ...args));
  }

  public warn(message: string, ...args: unknown[]): void {
    // eslint-disable-next-line no-console
    console.warn(this.formatMessage(LogLevel.WARN, message, ...args));
  }

  public debug(message: string, ...args: unknown[]): void {
    // eslint-disable-next-line no-console
    console.log(this.formatMessage(LogLevel.DEBUG, message, ...args));
  }

  private formatMessage(level: LogLevel, message: string, ...args: unknown[]): string {
    const timestamp = new Date().toISOString();
    const JSON_INDENT_SPACES = 2;
    const formattedArgs = args.length > 0
      ? ' ' + args.map(arg =>
        typeof arg === 'object' ? JSON.stringify(arg, null, JSON_INDENT_SPACES) : String(arg),
      ).join('')
      : '';

    return `[${timestamp}] [${level}] ${message}${formattedArgs}`;
  }

}

export const logger = new Logger();
