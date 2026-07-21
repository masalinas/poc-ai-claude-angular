import { Injectable, signal } from '@angular/core';
import type { User, AuthCredentials, AuthResponse } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly #user = signal<User | null>(null);
  readonly #token = signal<string | null>(null);

  readonly user = this.#user.asReadonly();
  readonly isAuthenticated = signal(false);

  constructor() {
    this.restoreSession();
  }

  private restoreSession(): void {
    const token = localStorage.getItem('auth_token');
    const userData = localStorage.getItem('auth_user');

    if (token && userData) {
      try {
        const user = JSON.parse(userData) as User;
        this.#token.set(token);
        this.#user.set(user);
        this.isAuthenticated.set(true);
      } catch (error) {
        console.error('Error restoring session:', error);
        this.clearSession();
      }
    }
  }

  private clearSession(): void {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_user');
    this.#user.set(null);
    this.#token.set(null);
    this.isAuthenticated.set(false);
  }

  async login(credentials: AuthCredentials): Promise<AuthResponse> {
    // TODO: Replace with actual API call
    const response: AuthResponse = {
      user: {
        id: '1',
        email: credentials.email,
        name: 'Usuario',
        roles: ['user'],
      },
      token: 'mock-token',
    };

    this.#user.set(response.user);
    this.#token.set(response.token);
    this.isAuthenticated.set(true);

    localStorage.setItem('auth_token', response.token);
    localStorage.setItem('auth_user', JSON.stringify(response.user));

    return response;
  }

  logout(): void {
    this.clearSession();
  }
}
