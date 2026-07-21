import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { ProductCardComponent } from '../components/product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.page.html',
  styleUrl: './product-list.page.scss'
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