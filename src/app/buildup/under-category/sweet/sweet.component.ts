import { Component } from '@angular/core';

@Component({
  selector: 'app-sweet',
  templateUrl: './sweet.component.html',
  styleUrl: './sweet.component.css'
})
export class SweetComponent {
  selectedCategory:any;
  products: any[] = [
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
  ];
  selected(selectId:any)
  {
    this.selectedCategory = selectId;
  }
}
