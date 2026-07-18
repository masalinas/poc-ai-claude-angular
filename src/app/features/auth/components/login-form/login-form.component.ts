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
  template: `
    <p-card>
      <ng-template #title>
        <div class="text-center">
          <i class="pi pi-angular text-4xl mb-2" style="color: var(--p-primary-800)"></i>
          <h2 class="text-xl font-bold m-0">Iniciar sesión</h2>
        </div>
      </ng-template>
      <ng-template #content>
        <form (ngSubmit)="onSubmit()" class="flex flex-column gap-4">
          <div class="flex flex-column gap-1">
            <label for="email" class="text-sm text-gray-600">Email</label>
            <input
              id="email"
              type="email"
              pInputText
              [(ngModel)]="email"
              name="email"
              required
              autocomplete="email"
              placeholder="tu@email.com"
            />
          </div>

          <div class="flex flex-column gap-1">
            <label for="password" class="text-sm text-gray-600">Contraseña</label>
            <p-password
              [(ngModel)]="password"
              name="password"
              [feedback]="false"
              [toggleMask]="true"
              inputId="password"
              placeholder="••••••••"
              autocomplete="current-password"
              styleClass="w-full"
            />
          </div>

          <p-button
            type="submit"
            label="Entrar"
            icon="pi pi-sign-in"
            [disabled]="!email || !password"
            styleClass="w-full"
          />
        </form>
      </ng-template>
    </p-card>
  `,
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