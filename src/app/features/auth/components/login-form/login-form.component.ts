import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Card } from 'primeng/card';
import { InputText } from 'primeng/inputtext';
import { Password } from 'primeng/password';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule, Card, InputText, Password, Button],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  protected email = '';
  protected password = '';

  readonly login = output<{ email: string; password: string }>();

  protected onSubmit(): void {
    if (this.email && this.password) {
      this.login.emit({ email: this.email, password: this.password });
    }
  }
}