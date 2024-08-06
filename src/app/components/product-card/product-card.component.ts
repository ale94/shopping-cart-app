import { Component, Input } from '@angular/core';
import { Product } from '../../models/products';

@Component({
  selector: 'div[product-card]',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {

  @Input() product!: Product;

}
