import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="flex align-items-center justify-content-center" style="min-height: 100dvh; background: linear-gradient(135deg, var(--p-primary-900) 0%, var(--p-primary-800) 50%, var(--p-primary-700) 100%);">
      <div style="width: 100%; max-width: 420px; padding: 2rem;">
        <router-outlet />
      </div>
    </div>
  `,
})
export class AuthLayoutComponent {}