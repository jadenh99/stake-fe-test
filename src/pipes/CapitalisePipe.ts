import { Pipe, PipeTransform } from '@angular/core';

type CapitaliseMode = 'first' | 'all';

@Pipe({
  name: 'capitalise',
})
export class CapitalisePipe implements PipeTransform {
  transform(value: string, mode: CapitaliseMode = 'first'): string {
    if (!value) return '';

    switch (mode) {
      case 'all':
        return value.toUpperCase();

      case 'first':
      default:
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
}
