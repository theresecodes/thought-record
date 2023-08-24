import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'textOverflow'
})
export class TextOverflowPipe implements PipeTransform {

  transform(value: unknown, limit = 41, suffix = '...'): unknown {
    if (typeof value !== 'string') return value;
    return value.length > limit ? value.substring(0, limit) + suffix : value;
  }

}
