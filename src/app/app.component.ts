import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: `app/template/app.component.html`
             
  /*`
  <outer-comp>loading outer file....</outer-comp>
  <model-comp> loadng model....</model-comp>
  <form-comp> loading form comp...</form-comp>
  <h1>Observable demo</h1>
  <observe-comp>LOading observable component here...</observe-comp>
  <user-comp [parentName]="name"
     (greetEvent)= "greetMe($event)">
    </user-comp>`*/
})
export class AppComponent  { name = 'User'; 

   greetMe(user:any){
   	  // alert("Client says"+ msg);
   	  alert(user.firstName +" is the founder of " +user.company);
   }
}
