import { Component, inject, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { StatsCardComponent } from '../components/stats-card/stats-card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [StatsCardComponent],
  template: `
    <div>
      <h1 class="text-2xl font-bold m-0 mb-4" style="color: var(--p-primary-900)">Dashboard</h1>

      <div class="grid">
        <div class="col-12 sm:col-6 lg:col-3">
          <app-stats-card
            label="Usuarios totales"
            [value]="service.stats().totalUsers"
            subtext="Registrados"
          />
        </div>
        <div class="col-12 sm:col-6 lg:col-3">
          <app-stats-card
            label="Usuarios activos"
            [value]="service.stats().activeUsers"
            subtext="Este mes"
          />
        </div>
        <div class="col-12 sm:col-6 lg:col-3">
          <app-stats-card
            label="Productos"
            [value]="service.stats().totalProducts"
            subtext="En catálogo"
          />
        </div>
        <div class="col-12 sm:col-6 lg:col-3">
          <app-stats-card
            label="Ingresos"
            [value]="'$' + service.stats().revenue.toLocaleString()"
            subtext="Este trimestre"
          />
        </div>
      </div>
    </div>
  `,
})
export class DashboardPage implements OnInit {
  protected readonly service = inject(DashboardService);

  ngOnInit(): void {
    this.service.loadStats();
  }
}