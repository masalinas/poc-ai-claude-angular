import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LoginFormComponent } from '../components/login-form/login-form.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginFormComponent],
  templateUrl: './login.page.html',
  styleUrl: './login.page.scss'
})
export class LoginPage {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  async onLogin(credentials: { email: string; password: string }): Promise<void> {
    try {
      await this.authService.login(credentials.email, credentials.password);
      await this.router.navigate(['/dashboard']);
    } catch (error) {
      console.error('Login failed:', error);
    }
  }
}