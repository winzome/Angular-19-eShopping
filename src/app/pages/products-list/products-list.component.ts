import { Component, signal } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';

export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  stock?: number;
};

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  template: `
    <div class="p-8 grid grid-cols-2 gap-4">
      @for (product of products(); track product.id) {
      <app-product-card [product]="product" />
      }
    </div>
  `,
  styles: ``,
})
export class ProductsListComponent {
  products = signal<Product[]>([
    {
      id: 1,
      title: 'Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 108,
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      stock: 7,
    },
    {
      id: 2,
      title: 'Mens Premium Slim Fit T-Shirts ',
      price: 28.8,
      image:
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
      stock: 0,
    },
    {
      id: 3,
      title: 'Mens Premium Cotton Jacket',
      price: 58.98,

      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
      stock: 4,
    },
    {
      id: 4,
      title: 'Mens Casual Slim Fit',
      price: 18.88,
      image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
      stock: 8,
    },
  ]);
}
