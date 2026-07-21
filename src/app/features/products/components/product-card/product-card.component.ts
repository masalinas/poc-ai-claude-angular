import { Component, input, output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Card } from 'primeng/card';
import { Button } from 'primeng/button';
import { Tag } from 'primeng/tag';
import type { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe, Card, Button, Tag],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  readonly product = input.required<Product>();
  readonly viewDetails = output<string>();
}