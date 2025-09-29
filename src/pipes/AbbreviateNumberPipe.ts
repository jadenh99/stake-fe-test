import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abbreviateNumber',
  standalone: true,
})
export class AbbreviateNumberPipe implements PipeTransform {
  transform(
    value: number | string | null | undefined,
    decimals: number = 1
  ): string {
    if (value === null || value === undefined || value === '') return '';

    const raw = typeof value === 'string' ? value.replace(/,/g, '') : value;
    const parsed = Number(raw);
    if (!isFinite(parsed)) return '';

    const sign = parsed < 0 ? '-' : '';
    let num = Math.abs(parsed);

    const units = ['K', 'M', 'B', 'T'];

    if (num < 9999) {
      num = decimals > 0 ? Number(num.toFixed(decimals)) : Math.round(num);
      return sign + String(num);
    }

    // For large numbers, abbreviate
    let unitIndex = -1;
    while (num >= 1000 && unitIndex < units.length - 1) {
      num /= 1000;
      unitIndex++;
    }

    const formatted =
      decimals > 0 ? Number(num.toFixed(decimals)) : Math.round(num);
    return sign + formatted + units[unitIndex];
  }
}
