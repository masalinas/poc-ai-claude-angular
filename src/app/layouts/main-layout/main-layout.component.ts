import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <div class="flex flex-column" style="height: 100dvh">
      <app-header />
      <main class="flex-1 overflow-y-auto p-4">
        <div class="max-w-1200 mx-auto">
          <router-outlet />
        </div>
      </main>
      <app-footer />
    </div>
  `,
  styles: [`
    .max-w-1200 {
      max-width: 1200px;
    }
  `],
})
export class MainLayoutComponent {}