import { Component } from '@angular/core';

@Component({
	selector : 'outer-comp',
	template : `
	<h1>Outer component loaded successfully...</h1>

	<inner-comp [employeeObj]="employee">Loading...</inner-comp>

	<button (click)="changeProperty()">Change Property</button>
	<button (click)="changeObject()">Change Object</button>
	`
})
export class OuterComponent{
	employee : {id: number, name : string}
	constructor(){
		this.employee = {id: 101, name : "Karthick"}
	}

	changeProperty(){
		this.employee.name = "Foo123"
	}

	changeObject(){
		this.employee = {id:102,name:"Anil"};
	}

}