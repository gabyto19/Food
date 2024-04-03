import { Component } from '@angular/core';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrl: './drink.component.css'
})
export class DrinkComponent {
  selectedCategory:any;
  products: any[] = [
    {
      id: 1,
      name: 'Water',
      imageUrl: '/assets/imgs/drinkproducts/water.png',
    },
    {
      id: 2,
      name: 'Juice',
      imageUrl: '/assets/imgs/drinkproducts/juice.png',
    },
    {
      id: 3,
      name: 'Soda',
      imageUrl: '/assets/imgs/drinkproducts/soda.png',
    },
    {
      id: 4,
      name: 'Cafe',
      imageUrl: '/assets/imgs/drinkproducts/cafe.png',
    },
    {
      id: 5,
      name: 'Tea',
      imageUrl: '/assets/imgs/drinkproducts/tea.png',
    },
    { 
      id: 6,
      name: 'Beer',
      imageUrl: '/assets/imgs/drinkproducts/beer.png',
    },
  ];
  selected(selectId:any)
  {
    this.selectedCategory = selectId;
  }
}
