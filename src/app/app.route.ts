import {Routes } from '@angular/router';
import {UserComponent} from './user.component';
import {ObservableComponent} from './observable.component';
import {ModelFormComponent} from './modelform.component';
import {TemplateFormComponent} from './templateform.component';
 import {OuterComponent} from './outer.component';
import {PageNotFoundComponent} from './pagenotfound.component';


 export const APP_ROUTES :Routes =[
 {path :"",component :UserComponent},
 {path :"observe",component : ObservableComponent},
 {path :"model" ,component : ModelFormComponent},
 {path:"template",component : TemplateFormComponent },
 {path:"outer",component : OuterComponent },
 {path:"**",component : PageNotFoundComponent },
 
 ]
