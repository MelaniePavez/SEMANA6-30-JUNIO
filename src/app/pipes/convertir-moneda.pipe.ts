import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertirMoneda',
})
export class ConvertirMonedaPipe implements PipeTransform {

  transform(value: number): string {
    if (value == null) return '';
    // Solo formatea el número con separadores de miles para Chile
    return `$${value.toLocaleString('es-CL')} CLP`;
  }

}
