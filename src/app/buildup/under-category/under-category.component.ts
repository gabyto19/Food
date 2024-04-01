import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-under-category',
  templateUrl: './under-category.component.html',
  styleUrl: './under-category.component.css',
})
export class UnderCategoryComponent {
  categoryOfProduct: string = 'food';
  private valueChangeSubscription: Subscription;

  constructor(private sharedService: SharedService) {
    this.valueChangeSubscription = this.sharedService.sharedVariable$.subscribe(newValue => {
      this.categoryOfProduct = newValue;
    });
  }

  ngOnDestroy() {
    if (this.valueChangeSubscription) {
      this.valueChangeSubscription.unsubscribe();
    }
  }
}