import { Injectable } from '@angular/core';
import { AuthService as CoreAuthService } from '../../../core/services/auth.service';

/**
 * Feature-specific auth service.
 * Delegates to the core AuthService and adds feature-specific logic.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly coreAuth: CoreAuthService) {}

  get isAuthenticated() {
    return this.coreAuth.isAuthenticated;
  }

  get user() {
    return this.coreAuth.user;
  }

  async login(email: string, password: string): Promise<void> {
    await this.coreAuth.login({ email, password });
  }

  logout(): void {
    this.coreAuth.logout();
  }
}