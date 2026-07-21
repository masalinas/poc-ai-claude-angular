import { Component, input } from '@angular/core';
import { Card } from 'primeng/card';

@Component({
  selector: 'app-stats-card',
  standalone: true,
  imports: [Card],
  templateUrl: './stats-card.component.html',
  styleUrl: './stats-card.component.scss'
})
export class StatsCardComponent {
  readonly label = input.required<string>();
  readonly value = input.required<string | number>();
  readonly subtext = input<string>();
}