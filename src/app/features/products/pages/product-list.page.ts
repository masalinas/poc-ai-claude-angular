import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { ProductCardComponent } from '../components/product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  template: `
    <div>
      <h1 class="text-2xl font-bold m-0 mb-4" style="color: var(--p-primary-900)">Productos</h1>

      <div class="grid">
        @for (product of service.products(); track product.id) {
          <div class="col-12 sm:col-6 lg:col-4">
            <app-product-card
              [product]="product"
              (viewDetails)="onViewDetails($event)"
            />
          </div>
        } @empty {
          <div class="col-12">
            <p class="text-center text-gray-400 text-lg">No hay productos disponibles</p>
          </div>
        }
      </div>
    </div>
  `,
})
export class ProductListPage implements OnInit {
  protected readonly service = inject(ProductService);
  private readonly router = inject(Router);

  ngOnInit(): void {
    this.service.loadProducts();
  }

  onViewDetails(id: string): void {
    this.router.navigate(['/products', id]);
  }
}