import { Component, OnDestroy } from '@angular/core';
import { Subscription, findIndex } from 'rxjs';
import { SharedService } from '../../shared.service';
@Component({
  selector: 'app-plate',
  templateUrl: './plate.component.html',
  styleUrl: './plate.component.css',
})
export class PlateComponent {
  plate: string = 'plate';
  category:any;
  
  private valueChangeSubscription: Subscription;

  constructor(private sharedService: SharedService) {
    this.valueChangeSubscription = this.sharedService.sharedIndex$.subscribe(
      (index) => {
        this.plate = index == '1' ? 'plate' : 'b-plate';
        
      }
    );
    this.valueChangeSubscription = this.sharedService.sharedCategory$.subscribe(
      (category) => {
        this.category = category;
        console.log(category);
      }
    );
  }
}
