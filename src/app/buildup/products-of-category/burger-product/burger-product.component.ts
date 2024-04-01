import { Component } from '@angular/core';

@Component({
  selector: 'app-burger-product',
  templateUrl: './burger-product.component.html',
  styleUrl: './burger-product.component.css'
})
export class BurgerProductComponent {
  products: any[] = [
    {
      id: 1,
      name: 'Bacon',
      imageUrl: '/assets/imgs/burger-products/bacon.png',
    },
    {
      id: 2,
      name: 'Beef',
      imageUrl: '/assets/imgs/burger-products/beef.png',
    },
    {
      id: 3,
      name: 'Bread',
      imageUrl: '/assets/imgs/burger-products/bread.png',
    },
    {
      id: 4,
      name: 'Cheese',
      imageUrl: '/assets/imgs/burger-products/cheese.png',
    },
    {
      id: 5,
      name: 'Sauce',
      imageUrl: '/assets/imgs/burger-products/sauce.png',
    },
    {
      id: 6,
      name: 'Vegetable',
      imageUrl: '/assets/imgs/burger-products/vegetable.png',
    },
    // Add more products as needed
  ];
}
