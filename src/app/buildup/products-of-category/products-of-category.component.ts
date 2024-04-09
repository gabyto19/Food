import { Component, OnDestroy } from '@angular/core';
import { Subscription, findIndex } from 'rxjs';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-products-of-category',
  templateUrl: './products-of-category.component.html',
  styleUrl: './products-of-category.component.css',
})
export class ProductsOfCategoryComponent {
  foodProducts: any[] = [
    [
      //Breakfast category
      {
        id: 1,
        name: 'Bread',
        imageUrl: '/assets/imgs/eatsproduct/Breakfast-products/bread.png',
      },
      {
        id: 2,
        name: 'Cheese',
        imageUrl: '/assets/imgs/eatsproduct/Breakfast-products/cheese.png',
      },
      {
        id: 3,
        name: 'Egg',
        imageUrl: '/assets/imgs/eatsproduct/Breakfast-products/egg.png',
      },
      {
        id: 4,
        name: 'Meat',
        imageUrl: '/assets/imgs/eatsproduct/Breakfast-products/meat.png',
      },
      {
        id: 5,
        name: 'Sausage',
        imageUrl: '/assets/imgs/eatsproduct/Breakfast-products/sausage.png',
      },

      {
        id: 6,
        name: 'Sauce',
        imageUrl: '/assets/imgs/eatsproduct/Breakfast-products/sauce.png',
      },
      {
        id: 7,
        name: 'Potato',
        imageUrl: '/assets/imgs/eatsproduct/Breakfast-products/potato.png',
      },
      {
        id: 8,
        name: 'Fruit',
        imageUrl: '/assets/imgs/eatsproduct/Breakfast-products/fruit.png',
      },
    ],
    [
      //Sandwich category
      {
        id: 1,
        name: 'Bacon',
        imageUrl: '/assets/imgs/eatsproduct/Sandwich-products/bacon.png',
      },
      {
        id: 2,
        name: 'Bread',
        imageUrl: '/assets/imgs/eatsproduct/Sandwich-products/bread.png',
      },
      {
        id: 3,
        name: 'Cheese',
        imageUrl: '/assets/imgs/eatsproduct/Sandwich-products/cheese.png',
      },
      {
        id: 4,
        name: 'Egg',
        imageUrl: '/assets/imgs/eatsproduct/Sandwich-products/egg.png',
      },
      {
        id: 5,
        name: 'Sauce',
        imageUrl: '/assets/imgs/eatsproduct/Sandwich-products/sauce.png',
      },
      {
        id: 6,
        name: 'Vegetable',
        imageUrl: '/assets/imgs/eatsproduct/Sandwich-products/vegetable.png',
      },
    ],
    [
      //Wrap category
      {
        id: 2,
        name: 'Meat',
        imageUrl: '/assets/imgs/eatsproduct/wrap-products/meat.png',
      },
      {
        id: 3,
        name: 'Bread',
        imageUrl: '/assets/imgs/eatsproduct/wrap-products/bread.png',
      },
      {
        id: 4,
        name: 'Cheese',
        imageUrl: '/assets/imgs/eatsproduct/burger-products/cheese.png',
      },
      {
        id: 5,
        name: 'Sauce',
        imageUrl: '/assets/imgs/eatsproduct/burger-products/sauce.png',
      },
      {
        id: 6,
        name: 'Vegetable',
        imageUrl: '/assets/imgs/eatsproduct/burger-products/vegetable.png',
      },
    ],
    [
      //Soup category
      {
        id: 1,
        name: 'Bacon',
        imageUrl: '/assets/imgs/eatsproduct/burger-products/bacon.png',
      },
      {
        id: 2,
        name: 'Beef',
        imageUrl: '/assets/imgs/eatsproduct/burger-products/beef.png',
      },
      {
        id: 3,
        name: 'Bread',
        imageUrl: '/assets/imgs/eatsproduct/burger-products/bread.png',
      },
      {
        id: 4,
        name: 'Cheese',
        imageUrl: '/assets/imgs/eatsproduct/burger-products/cheese.png',
      },
      {
        id: 5,
        name: 'Sauce',
        imageUrl: '/assets/imgs/eatsproduct/burger-products/sauce.png',
      },
      {
        id: 6,
        name: 'Vegetable',
        imageUrl: '/assets/imgs/eatsproduct/burger-products/vegetable.png',
      },
    ],
  ];

  drinkProducts: any[] = [
    [
      //Water Category
      {
        id: 1,
        name: 'Natural Water',
        imageUrl: '/assets/imgs/drink-products/water-products/water.png',
      },
      {
        id: 2,
        name: 'Sparkled Water',
        imageUrl: '/assets/imgs/drink-products/water-products/sparkled.png',
      },
      {
        id: 3,
        name: 'Water with Fruit',
        imageUrl: '/assets/imgs/drink-products/water-products/fruited.png',
      },
    ],
    [
      //Juice Category
      {
        id: 1,
        name: 'One juice',
        imageUrl: '/assets/imgs/drink-products/juice-products/one.png',
      },
      {
        id: 2,
        name: 'Sparkled Water',
        imageUrl: '/assets/imgs/drink-products/juice-products/mix.png',
      },
      {
        id: 3,
        name: 'Water with Fruit',
        imageUrl: '/assets/imgs/drink-products/juice-products/fresh.png',
      },
    ],
    [
      //Soda Category
      {
        id: 1,
        name: 'Coca-Cola',
        imageUrl: '/assets/imgs/drink-products/soda-products/cola.png',
      },
      {
        id: 2,
        name: 'Fanta',
        imageUrl: '/assets/imgs/drink-products/soda-products/fanta.png',
      },
      {
        id: 3,
        name: 'Pepsi',
        imageUrl: '/assets/imgs/drink-products/soda-products/pepsi.png',
      },
      {
        id: 4,
        name: 'Sprite',
        imageUrl: '/assets/imgs/drink-products/soda-products/sprite.png',
      },
      {
        id: 5,
        name: 'Energy',
        imageUrl: '/assets/imgs/drink-products/soda-products/energy.png',
      },
    ],
    [
      //Coffee Category
      {
        id: 1,
        name: 'Cappuccino',
        imageUrl: '/assets/imgs/drink-products/coffee-products/cappuccino.png',
      },
      {
        id: 2,
        name: 'espresso',
        imageUrl: '/assets/imgs/drink-products/coffee-products/espresso.png',
      },
      {
        id: 3,
        name: 'Latte',
        imageUrl: '/assets/imgs/drink-products/coffee-products/Latte.png',
      },
      {
        id: 4,
        name: 'Americano',
        imageUrl: '/assets/imgs/drink-products/coffee-products/Americano.png',
      },
      {
        id: 5,
        name: 'Macchiata',
        imageUrl: '/assets/imgs/drink-products/coffee-products/macchiata.png',
      },
      {
        id: 6,
        name: 'Ice Latte',
        imageUrl: '/assets/imgs/drink-products/coffee-products/Ice latte.png',
      },
    ],
    [
      //Tea Category
      {
        id: 1,
        name: 'Ginger',
        imageUrl: '/assets/imgs/drink-products/tea-products/Ginger Tea.png',
      },
      {
        id: 2,
        name: 'Hibiscus',
        imageUrl: '/assets/imgs/drink-products/tea-products/hibiscus.png',
      },
      {
        id: 3,
        name: 'Jasmine',
        imageUrl: '/assets/imgs/drink-products/tea-products/jasmine tea.png',
      },
      {
        id: 4,
        name: 'Matca green',
        imageUrl:
          '/assets/imgs/drink-products/tea-products/matca green tea.png',
      },
      {
        id: 5,
        name: 'Peppermint',
        imageUrl: '/assets/imgs/drink-products/tea-products/peppermint.png',
      },
      {
        id: 6,
        name: 'Pu-erh',
        imageUrl: '/assets/imgs/drink-products/tea-products/pu-erh.png',
      },
    ],
    [
      //Beer Category
      {
        id: 1,
        name: 'Natural Water',
        imageUrl: '/assets/imgs/drink-products/beer-products/1.png',
      },
      {
        id: 2,
        name: 'Sparkled Water',
        imageUrl: '/assets/imgs/drink-products/beer-products/2.png',
      },
      {
        id: 3,
        name: 'Water with Fruit',
        imageUrl: '/assets/imgs/drink-products/beer-products/3.png',
      },
      {
        id: 4,
        name: 'Natural Water',
        imageUrl: '/assets/imgs/drink-products/beer-products/4.png',
      },
      {
        id: 5,
        name: 'Natural Water',
        imageUrl: '/assets/imgs/drink-products/beer-products/5.png',
      },
      {
        id: 6,
        name: 'Natural Water',
        imageUrl: '/assets/imgs/drink-products/beer-products/6.png',
      },
    ],
  ];
  dessertsProducts: any[] = [
    [
      //Cake category
      {
        id: 1,
        name: 'Chocolate',
        imageUrl: '/assets/imgs/dessert-products/cake-products/1.png',
      },
      {
        id: 2,
        name: 'nuts',
        imageUrl: '/assets/imgs/dessert-products/cake-products/2.png',
      },
      {
        id: 3,
        name: 'fruit',
        imageUrl: '/assets/imgs/dessert-products/cake-products/3.png',
      },
      {
        id: 4,
        name: 'mix',
        imageUrl: '/assets/imgs/dessert-products/cake-products/4.png',
      },
      {
        id: 5,
        name: 'vanilla',
        imageUrl: '/assets/imgs/dessert-products/cake-products/5.png',
      },
    ],
    [
      //Cookie category
      {
        id: 1,
        name: 'Chocolate',
        imageUrl: '/assets/imgs/dessert-products/cookie-products/1.png',
      },
      {
        id: 2,
        name: 'Nuts',
        imageUrl: '/assets/imgs/dessert-products/cookie-products/2.png',
      },
      {
        id: 3,
        name: 'Fruit',
        imageUrl: '/assets/imgs/dessert-products/cookie-products/3.png',
      },
      {
        id: 4,
        name: 'Mix',
        imageUrl: '/assets/imgs/dessert-products/cookie-products/4.png',
      },
      {
        id: 5,
        name: 'Vanilla',
        imageUrl: '/assets/imgs/dessert-products/cookie-products/5.png',
      },
    ],
    [
      //Donut category
      {
        id: 1,
        name: 'Chocolate',
        imageUrl: '/assets/imgs/dessert-products/donut-products/1.png',
      },
      {
        id: 2,
        name: 'Nuts',
        imageUrl: '/assets/imgs/dessert-products/donut-products/2.png',
      },
      {
        id: 3,
        name: 'Fruit',
        imageUrl: '/assets/imgs/dessert-products/donut-products/3.png',
      },
      {
        id: 4,
        name: 'Mix',
        imageUrl: '/assets/imgs/dessert-products/donut-products/4.png',
      },
      {
        id: 5,
        name: 'Vanilla',
        imageUrl: '/assets/imgs/dessert-products/donut-products/5.png',
      },
    ],
    [
      //Muffin category
      {
        id: 1,
        name: 'Chocolate',
        imageUrl: '/assets/imgs/dessert-products/muffin-products/1.png',
      },
      {
        id: 2,
        name: 'Nuts',
        imageUrl: '/assets/imgs/dessert-products/muffin-products/2.png',
      },
      {
        id: 3,
        name: 'Fruit',
        imageUrl: '/assets/imgs/dessert-products/muffin-products/3.png',
      },
      {
        id: 4,
        name: 'Mix',
        imageUrl: '/assets/imgs/dessert-products/muffin-products/4.png',
      },
      {
        id: 5,
        name: 'Vanilla',
        imageUrl: '/assets/imgs/dessert-products/muffin-products/5.png',
      },
    ],
  ];
  selectedName: any;
  arrayNum: any;
  category: any;
  selectProduct(value: any) {
    this.selectedName = value;
  }

  ngOnInit(): any {}
  private valueChangeSubscription: Subscription;

  constructor(private sharedService: SharedService) {
    this.valueChangeSubscription = this.sharedService.sharedIndex$.subscribe(
      (index) => {
        this.arrayNum = index;
      }
    );
    this.valueChangeSubscription = this.sharedService.sharedCategory$.subscribe(
      (category) => {
        this.category = category;
      }
    );
    console.log(this.category);
  }

  ngOnDestroy() {
    if (this.valueChangeSubscription) {
      this.valueChangeSubscription.unsubscribe();
    }
  }
}
