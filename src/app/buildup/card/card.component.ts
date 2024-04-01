import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  products: any[] = [
    {
      id: 1,
      name: 'Cheese',
      imageUrl: '/assets/imgs/sauce-elements/Cheese.png',
    },
    {
      id: 2,
      name: 'Chilly',
      imageUrl: '/assets/imgs/sauce-elements/chilly.png',
    },
    {
      id: 3,
      name: 'Ketchup',
      imageUrl: '/assets/imgs/sauce-elements/ketchup.png',
    },
    {
      id: 4,
      name: 'Mayonese',
      imageUrl: '/assets/imgs/sauce-elements/mayo.png',
    },
  ];
}
