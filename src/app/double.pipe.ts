import {Pipe,PipeTransform} from '@angular/core';
@Pipe({
	name:'doubleMe'
})
export class DoubleMePipe implements PipeTransform{
	transform(value:number) :number{
		return value*2;
	}
}
