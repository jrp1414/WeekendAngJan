import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertTo'
})
export class ConvertToPipe implements PipeTransform {

  transform(value: string, charToBeConverted:string,desiredOutput:string): any {
    return value.replace(charToBeConverted,desiredOutput);
  }

}
