import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  getCurrentValue(): any {
    throw new Error('Method not implemented.');
  }
  private _sharedVariable = new BehaviorSubject<string>('Initial Value');
  
  sharedVariable$ = this._sharedVariable.asObservable();

  private _sharedIndex = new BehaviorSubject<string>('Initial Value');
  
  sharedIndex$ = this._sharedIndex.asObservable();

  private _sharedCategory = new BehaviorSubject<string>('Initial Value');
  
  sharedCategory$ = this._sharedCategory.asObservable();

  constructor() { }
  changeSharedIndex(index: string,category:any) {
    this._sharedIndex.next(index);
    this._sharedCategory.next(category);
  }

  changeSharedVariable(newValue: string) {
    this._sharedVariable.next(newValue);
  }
}
