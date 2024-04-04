import { Component } from '@angular/core';

@Component({
  selector: 'app-products-of-category',
  templateUrl: './products-of-category.component.html',
  styleUrl: './products-of-category.component.css',
})
export class ProductsOfCategoryComponent {
  foodProducts: any[] = [
    [//Breakfast category
      {
        id: 1,
        name: 'Bread',
        imageUrl: '/assets/imgs/Breakfast-products/bread.png',
      },
      {
        id: 2,
        name: 'Cheese',
        imageUrl: '/assets/imgs/Breakfast-products/cheese.png',
      },
      {
        id: 3,
        name: 'Egg',
        imageUrl: '/assets/imgs/Breakfast-products/egg.png',
      },
      {
        id: 4,
        name: 'Meat',
        imageUrl: '/assets/imgs/Breakfast-products/meat.png',
      },
      {
        id: 5,
        name: 'Sausage',
        imageUrl: '/assets/imgs/Breakfast-products/sausage.png',
      },

      {
        id: 6,
        name: 'Sauce',
        imageUrl: '/assets/imgs/Breakfast-products/sauce.png',
      },
      {
        id: 7,
        name: 'Potato',
        imageUrl: '/assets/imgs/Breakfast-products/potato.png',
      },
      {
        id: 8,
        name: 'Fruit',
        imageUrl: '/assets/imgs/Breakfast-products/fruit.png',
      },
    ],
    [//Sandwich category
      {
        id: 1,
        name: 'Bacon',
        imageUrl: '/assets/imgs/Sandwich-products/bacon.png',
      },
      {
        id: 2,
        name: 'Bread',
        imageUrl: '/assets/imgs/Sandwich-products/bread.png',
      },
      {
        id: 3,
        name: 'Cheese',
        imageUrl: '/assets/imgs/Sandwich-products/cheese.png',
      },
      {
        id: 4,
        name: 'Egg',
        imageUrl: '/assets/imgs/Sandwich-products/egg.png',
      },
      {
        id: 5,
        name: 'Sauce',
        imageUrl: '/assets/imgs/Sandwich-products/sauce.png',
      },
      {
        id: 6,
        name: 'Vegetable',
        imageUrl: '/assets/imgs/Sandwich-products/vegetable.png',
      },
    ],
    [//Wrap category
      {
        id: 2,
        name: 'Meat',
        imageUrl: '/assets/imgs/wrap-products/meat.png',
      },
      {
        id: 3,
        name: 'Bread',
        imageUrl: '/assets/imgs/wrap-products/bread.png',
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
    ],
    [//Soup category
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
    ],
  ];
  selectedName: any;
  arrayNum: any;

  selectProduct(value: any) {
    this.selectedName = value;
  }

  ngOnInit(): any {
    const productString = localStorage.getItem('product');
    if (productString !== null) {
      this.arrayNum = JSON.parse(productString);
    }
    this.arrayNum = 3;
  }
}
