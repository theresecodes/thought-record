import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentage'
})
export class PercentagePipe implements PipeTransform {

  /**
   * Converts decimal number to 100% format. 
   * @example 0.20 will be 20
   * 
   * @param value decimal number value should be lesser than 1. 
   * @returns percentage value
   */
  transform(value: number): number {
    if (value > 1) return value;
    return value * 100;
  }
}
