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

    return response;
  }

  logout(): void {
    this.#user.set(null);
    this.#token.set(null);
    this.isAuthenticated.set(false);
  }
}