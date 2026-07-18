import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Toolbar } from 'primeng/toolbar';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, Toolbar, Button],
  template: `
    <p-toolbar>
      <ng-template #start>
        <a routerLink="/" class="flex align-items-center gap-2 no-underline font-bold text-xl" style="color: var(--p-primary-50)">
          <i class="pi pi-angular" style="font-size: 1.5rem"></i>
          <span>POC Angular</span>
        </a>
      </ng-template>
      <ng-template #end>
        <p-button
          label="Dashboard"
          icon="pi pi-home"
          severity="primary"
          text
          styleClass="mr-2 header-btn"
          [link]="true"
          routerLink="/dashboard"
          routerLinkActive="header-btn-active"
        />
        <p-button
          label="Productos"
          icon="pi pi-box"
          severity="primary"
          text
          styleClass="header-btn"
          [link]="true"
          routerLink="/products"
          routerLinkActive="header-btn-active"
        />
      </ng-template>
    </p-toolbar>
  `,
  styles: [`
    :host ::ng-deep .p-toolbar {
      border-radius: 0;
      padding: 0.75rem 2rem;
      background: var(--p-primary-800);
      border: none;
    }

    :host ::ng-deep .header-btn {
      color: #fff !important;
    }

    :host ::ng-deep .header-btn:hover {
      background: rgba(255, 255, 255, 0.1) !important;
    }

    :host ::ng-deep .header-btn-active {
      background: rgba(255, 255, 255, 0.2) !important;
      border-bottom: 2px solid #fff !important;
    }
  `],
})
export class HeaderComponent {}