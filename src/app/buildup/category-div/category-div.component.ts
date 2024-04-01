import { Component } from '@angular/core';
import { SharedService } from '../../shared.service';
@Component({
  selector: 'app-category-div',
  templateUrl: './category-div.component.html',
  styleUrl: './category-div.component.css'
})
export class CategoryDivComponent {
  constructor(private sharedService: SharedService) { }

  changeComponentBValue(category:any) {
    const newValue = category;
    this.sharedService.changeSharedVariable(newValue);
  }
}
