import { Injectable, isDevMode } from '@angular/core';

export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  private readonly isDev = isDevMode();

  debug(context: string, message: string, ...data: unknown[]): void {
    if (this.isDev) {
      console.debug(`[${context}] ${message}`, ...data);
    }
  }

  info(context: string, message: string, ...data: unknown[]): void {
    console.info(`[${context}] ${message}`, ...data);
  }

  warn(context: string, message: string, ...data: unknown[]): void {
    console.warn(`[${context}] ${message}`, ...data);
  }

  error(context: string, message: string, error?: unknown): void {
    console.error(`[${context}] ${message}`, error);
  }
}