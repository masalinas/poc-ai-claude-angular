import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <div class="bg-primary-900 text-gray-300 text-center p-3 mt-auto">
      <p class="m-0 text-sm">&copy; {{ year }} POC Angular. All rights reserved.</p>
    </div>
  `,
})
export class FooterComponent {
  protected readonly year = new Date().getFullYear();
}