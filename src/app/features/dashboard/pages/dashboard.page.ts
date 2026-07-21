import { Component, inject, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { StatsCardComponent } from '../components/stats-card/stats-card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [StatsCardComponent],
  templateUrl: './dashboard.page.html',
  styleUrl: './dashboard.page.scss'
})
export class DashboardPage implements OnInit {
  protected readonly service = inject(DashboardService);

  ngOnInit(): void {
    this.service.loadStats();
  }
}