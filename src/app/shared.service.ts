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

  constructor() { }

  changeSharedVariable(newValue: string) {
    this._sharedVariable.next(newValue);
  }
}
