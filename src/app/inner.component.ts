import { Component,Input,ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'inner-comp',
  template:`<div>
       <h2>Change Detection - Inner Component</h2>
       <p>{{ employeeObj.name }}</p>
  </div>`,
  changeDetection:ChangeDetectionStrategy.OnPush
})

export class InnerComponent {
  @Input() employeeObj:any;
}