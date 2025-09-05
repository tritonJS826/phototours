export type LogLevel = "INFO" | "WARN" | "ERROR" | "DEBUG";

type LogEntry = {
  t: string;
  lvl: LogLevel;
  msg: string;
  data?: unknown[];
};

const MAX_BUFFER = 100;

class MemoryLogger {

  private buf: LogEntry[] = [];

  public info(msg: string, ...data: unknown[]): void {
    this.push("INFO", msg, data);
  }

  public warn(msg: string, ...data: unknown[]): void {
    this.push("WARN", msg, data);
  }

  public error(msg: string, ...data: unknown[]): void {
    this.push("ERROR", msg, data);
  }

  public debug(msg: string, ...data: unknown[]): void {
    this.push("DEBUG", msg, data);
  }

  private push(level: LogLevel, msg: string, data?: unknown[]): void {
    const entry: LogEntry = {t: new Date().toISOString(), lvl: level, msg, data};
    this.buf.push(entry);
    if (this.buf.length > MAX_BUFFER) {
      this.buf.shift();
    }
    (globalThis as unknown as { __APP_LOGS__?: LogEntry[] }).__APP_LOGS__ = this.buf;
    try {
      const payload = JSON.stringify(entry);
      const endpoint = import.meta.env.VITE_LOG_ENDPOINT;
      if (endpoint && navigator.sendBeacon) {
        const blob = new Blob([payload], {type: "application/json"});
        navigator.sendBeacon(endpoint, blob);
      }
    } catch { /* noop */ }
  }

}

export const logger = new MemoryLogger();
