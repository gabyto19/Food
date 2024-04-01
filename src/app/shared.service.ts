import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private _sharedVariable = new BehaviorSubject<string>('Initial Value');
  
  sharedVariable$ = this._sharedVariable.asObservable();

  constructor() { }

  changeSharedVariable(newValue: string) {
    this._sharedVariable.next(newValue);
  }
}
