import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sort'
})

export class SortPipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        return value.sort((a, b) => {



            var nameA = a[args[0]]; // ignore upper and lowercase
            var nameB = b[args[0]]; // ignore upper and lowercase
            if (args[1] == 'ASC') {
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
            }
            if (args[1] == 'DSC') {
                if (nameA > nameB) {
                    return -1;
                }
                if (nameA < nameB) {
                    return 1;
                }
            }

            // names must be equal
            return 0;
        });
    }
}