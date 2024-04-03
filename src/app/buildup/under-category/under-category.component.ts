import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-under-category',
  templateUrl: './under-category.component.html',
  styleUrl: './under-category.component.css',
})
export class UnderCategoryComponent {
  arrayNum: any;
  products: any[] = [
    [
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
    ],
    [
      {
        id: 1,
        name: 'Cake',
        imageUrl: '/assets/imgs/desserts/cake.png',
      },
      {
        id: 2,
        name: 'Cookie',
        imageUrl: '/assets/imgs/desserts/cookie.png',
      },
      {
        id: 3,
        name: 'Donut',
        imageUrl: '/assets/imgs/desserts/donut.png',
      },
      {
        id: 4,
        name: 'Muffin',
        imageUrl: '/assets/imgs/desserts/muffin.png',
      },
    ],
    [
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
    ],
  ];

  private valueChangeSubscription: Subscription;

  constructor(private sharedService: SharedService) {
    this.valueChangeSubscription = this.sharedService.sharedVariable$.subscribe(
      (newValue) => {
        this.arrayNum = newValue;
      }
    );
  }

  ngOnInit(): any {
    const productString = localStorage.getItem('product');
    if (productString !== null) {
      this.arrayNum = JSON.parse(productString);
    }
  }
  ngOnDestroy() {
    if (this.valueChangeSubscription) {
      this.valueChangeSubscription.unsubscribe();
    }
  }
}
