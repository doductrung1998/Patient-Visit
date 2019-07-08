import { Pipe, PipeTransform } from '@angular/core'

@Pipe({name: 'patientFilter'})
export class patientFilterPipe implements PipeTransform {
  transform(items: any[], criteria: string): any {
    if(criteria === 'All'){ return items } else
    return items.filter(item =>{
      return item.status === criteria;
    });
  }
}
