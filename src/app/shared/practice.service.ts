import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PracticeService {
 message!:string;
  constructor() { }

  setMessage(msg:string){
    this.message = msg;
  }

  getMessage(): Observable<string>{
   return of(this.message);
  }
}
