import { Injectable, signal } from '@angular/core';
import type { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  readonly #products = signal<Product[]>([]);
  readonly products = this.#products.asReadonly();

  async loadProducts(): Promise<void> {
    // TODO: Replace with actual API call
    this.#products.set([
      {
        id: '1',
        name: 'Producto A',
        description: 'Descripción del producto A',
        price: 29.99,
        active: true,
        createdAt: new Date(),
      },
      {
        id: '2',
        name: 'Producto B',
        description: 'Descripción del producto B',
        price: 49.99,
        active: true,
        createdAt: new Date(),
      },
      {
        id: '3',
        name: 'Producto C',
        description: 'Descripción del producto C',
        price: 19.99,
        active: false,
        createdAt: new Date(),
      },
    ]);
  }

  async getProductById(id: string): Promise<Product | undefined> {
    await this.loadProducts();
    return this.#products().find((p) => p.id === id);
  }
}