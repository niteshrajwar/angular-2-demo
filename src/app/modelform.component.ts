import {Component} from '@angular/core';
import { FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';


@Component({
                 selector : 'model-comp',
                 templateUrl : `app/template/modelform.component.html`,
                 styleUrls : [`app/css/templateform.component.css`]

})
export class ModelFormComponent{
username= new FormControl("",
	[Validators.minLength(5),
	Validators.maxLength(10), Validators.required]);



password =new FormControl("",[Validators.minLength(5),Validators.required]);
loginForm : FormGroup
constructor (private fb: FormBuilder){
this.loginForm=this.fb.group({
	username :this.username,
	password: this.password
});


}   

submitForm(){
	console.log(this.loginForm);
}

}