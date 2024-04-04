import { Component, OnDestroy } from '@angular/core';
import { Subscription, findIndex } from 'rxjs';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-under-category',
  templateUrl: './under-category.component.html',
  styleUrl: './under-category.component.css',
})
export class UnderCategoryComponent {
  selectedName: any;
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
        name: 'Sandwich',
        imageUrl: '/assets/imgs/foodproducts/sandwich.png',
      },
      {
        id: 3,
        name: 'Wrap',
        imageUrl: '/assets/imgs/foodproducts/icons8-wrap-100.png',
      },
      {
        id: 4,
        name: 'Soup',
        imageUrl: '/assets/imgs/foodproducts/flame-soup.png',
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

  selectProduct(value: any) {
    this.selectedName = value;
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
