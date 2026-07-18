import { Injectable, signal, computed } from '@angular/core';

export interface DashboardStats {
  totalUsers: number;
  activeUsers: number;
  totalProducts: number;
  revenue: number;
}

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  readonly #stats = signal<DashboardStats>({
    totalUsers: 0,
    activeUsers: 0,
    totalProducts: 0,
    revenue: 0,
  });

  readonly stats = this.#stats.asReadonly();
  readonly summary = computed(() => ({
    label: 'Resumen',
    total: this.#stats().totalUsers + this.#stats().totalProducts,
  }));

  async loadStats(): Promise<void> {
    // TODO: Replace with actual API call
    this.#stats.set({
      totalUsers: 1250,
      activeUsers: 890,
      totalProducts: 342,
      revenue: 48500,
    });
  }
}