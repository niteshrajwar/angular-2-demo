import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import  {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import { APP_ROUTES} from './app.route';


import { AppComponent }  from './app.component';
import { UserComponent } from './user.component';
import {MyComponent} from './my.component';
import {DoubleMePipe} from './double.pipe';
import {UserService} from './user.service';
import {ObservableComponent} from './observable.component';
import {TemplateFormComponent} from './templateform.component';
import {ModelFormComponent} from './modelform.component';
import {OuterComponent} from './outer.component';
import  {InnerComponent} from './inner.component';
import {PageNotFoundComponent} from './pagenotfound.component';



@NgModule({

  imports:   [ BrowserModule, FormsModule, HttpModule ,
                  ReactiveFormsModule,RouterModule.forRoot(APP_ROUTES) ],
  declarations: [ AppComponent,UserComponent,DoubleMePipe,
                 ObservableComponent,TemplateFormComponent,
                 ModelFormComponent,OuterComponent,InnerComponent,PageNotFoundComponent],
   //providers :    [ UserService ],
  providers :   [{ provide: 'UService',
                useClass:UserService},
                   {provide: 'addition',
                    useFactory: ()=>{
  	                   return function(num1:number,num2:number):number
  	                      { return num1+num2;}
  	       }
  	     }
      ],
  bootstrap:    [AppComponent]
})
export class AppModule { }


// 