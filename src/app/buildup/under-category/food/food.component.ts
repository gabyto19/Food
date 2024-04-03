import { Component } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrl: './food.component.css',
})
export class FoodComponent {
  selectedCategory: any;

  products: any[] = [
    {
      id: 1,
      name: 'Breakfast',
      imageUrl: '/assets/imgs/foodproducts/icons8-breakfast-60.png',
    },
    {
      id: 2,
      name: 'Fries',
      imageUrl: '/assets/imgs/foodproducts/icons8-french-fries-96.png',
    },
    {
      id: 3,
      name: 'Burger',
      imageUrl: '/assets/imgs/foodproducts/icons8-hamburger-94.png',
    },
    {
      id: 4,
      name: 'Pizza',
      imageUrl: '/assets/imgs/foodproducts/icons8-pizza-100.png',
    },
    {
      id: 5,
      name: 'Wrap',
      imageUrl: '/assets/imgs/foodproducts/icons8-wrap-100.png',
    },
  ];

  selected(selectId: any) {
    this.selectedCategory = selectId;
  }
}
