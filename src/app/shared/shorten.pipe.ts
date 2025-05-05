import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: string, arg: number): string {
    if(value.length > arg){
      return value.slice(0,arg)+ '...'
    }
    else return value;
    
  }

}
