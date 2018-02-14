import { Component,Inject,OnInit,Input,Output,EventEmitter } from '@angular/core';
import {User} from './user';
// import {USER_DATA} from './mock';
import {UserService} from './user.service';

@Component({

	selector: 'user-comp',
	//template: `<h2>User Component loaded successfully!!</h2>`
   templateUrl: `app/template/user.component.html`,
     styleUrls : [`app/css/user.component.css`]
})
export class UserComponent {
	/*userservice= new UserService;
	constructor(){
		this.userservice=  new UserService();}*/
		// constructor(private userService: UserService){}
		//constructor(private userService:UserService){}

	constructor(@Inject('addition') private add:any,
		@Inject('UService') private userService:UserService){}



	winner(){
		console.log(this.add(2,5));
console.log(this.times);
		let tv=0;
		let use:User;
		for(let user of this.users){
			if(user.vote>tv) {
				tv=user.vote;
			}
			use=user;

		}
		alert(use.firstName + " winning by " + tv);
	}
      totalIncome(){
                    let totIncome=0;
                      if(Array.isArray(this.users)){
                    for(let user of this.users)
                    {
                    	totIncome+=user.salary;
                    }
                    return totIncome;
                }

      	}

	users: User[];
	times: any;
	/*constructor(){
		console.log("contructor fired!!");
	}*/
	ngOnInit(){
          // this.users=this.userService.getUserData();
          this.userService.getUserData()
          .subscribe((response=>this.users=response));
          	/*this.userService.getJsonData()
          	.subscribe((resp=>{this.times=resp},
          		(err)=>{console.log("Error occured"+err)},
          		()=>console.log("Observable completed")
*/

      }



		/*console.log("ngOnInit fired!");}
	ngOnChanges(){console.log("ngoncange fired!!");}
	ngDoCheck(){console.log("ngdocheck fired!");}
	ngViewInit(){console.log("ngviewinit fired!!");}
	ngAfterViewChecked(){console.log("ngafterviewchecked fired!");}
	ngAfterContentInit(){console.log("ngaftercontentINit fired!!");}
	ngAfterContentChecked(){console.log("ngaftercontentchecked fired!");}

*/


	@Input() parentName: string;
	@Output() greetEvent= new EventEmitter();
	styleUser={color:'lightgreen'};
  

   knowMore(user :any){
   /*alert(user.firstName +" is the founder of " +user.company);

     this.greetEvent.emit("Hello!!!!");*/
     this.greetEvent.emit(user);

   }


}