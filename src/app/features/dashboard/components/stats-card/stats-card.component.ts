import { Component, input } from '@angular/core';
import { Card } from 'primeng/card';

@Component({
  selector: 'app-stats-card',
  standalone: true,
  imports: [Card],
  template: `
    <p-card>
      <ng-template #title>
        <span class="text-sm text-gray-500 uppercase tracking-wide">{{ label() }}</span>
      </ng-template>
      <ng-template #content>
        <p class="text-3xl font-bold m-0" style="color: var(--p-primary-900)">
          {{ value() }}
        </p>
        @if (subtext()) {
          <span class="text-xs text-gray-400 mt-1 block">{{ subtext() }}</span>
        }
      </ng-template>
    </p-card>
  `,
})
export class StatsCardComponent {
  readonly label = input.required<string>();
  readonly value = input.required<string | number>();
  readonly subtext = input<string>();
}