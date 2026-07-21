import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Toolbar } from 'primeng/toolbar';
import { Button } from 'primeng/button';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, Toolbar, Button],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  showProfileMenu = false;

  readonly userInitial = this.authService.user()?.name?.charAt(0).toUpperCase() ?? 'U';

  toggleProfileMenu(event: Event): void {
    event.stopPropagation();
    this.showProfileMenu = !this.showProfileMenu;
  }

  handleLogout(event: Event): void {
    event.stopPropagation();
    console.log('Logout clicked');
    this.authService.logout();
    this.showProfileMenu = false;
    this.router.navigate(['/auth/login']);
  }
}
