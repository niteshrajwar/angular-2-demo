import {Component} from '@angular/core';


@Component({
                 selector : 'form-comp',
                 templateUrl : `app/template/templateform.component.html`,
                styleUrls : [`app/css/templateform.component.css`]

})
export class TemplateFormComponent{
	submitForm(loginForm:any){
		console.log("passowrd:"+loginForm.controls.password);
	}
}