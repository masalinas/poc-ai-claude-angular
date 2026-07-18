import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { Card } from 'primeng/card';
import { Button } from 'primeng/button';
import { Tag } from 'primeng/tag';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterLink, CurrencyPipe, Card, Button, Tag],
  template: `
    <div>
      <p-button
        label="Volver"
        icon="pi pi-arrow-left"
        severity="secondary"
        styleClass="p-button-text mb-3"
        [link]="true"
        routerLink="/products"
      />

      @if (product) {
        <p-card>
          <ng-template #title>
            <div class="flex align-items-center justify-content-between">
              <span class="text-xl font-bold">{{ product.name }}</span>
              <p-tag
                [value]="product.active ? 'Activo' : 'Inactivo'"
                [severity]="product.active ? 'success' : 'secondary'"
              />
            </div>
          </ng-template>
          <ng-template #content>
            <p class="m-0 mb-3 text-gray-500">{{ product.description }}</p>
            <p class="text-2xl font-bold m-0" style="color: var(--p-primary-800)">
              {{ product.price | currency:'EUR':'symbol':'1.2-2' }}
            </p>
          </ng-template>
        </p-card>
      } @else {
        <p class="text-center text-gray-400 text-lg">Cargando producto...</p>
      }
    </div>
  `,
})
export class ProductDetailPage implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly productService = inject(ProductService);

  protected product?: Awaited<ReturnType<typeof this.productService.getProductById>>;

  async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.product = await this.productService.getProductById(id);
    }
  }
}