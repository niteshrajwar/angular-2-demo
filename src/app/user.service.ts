import {Injectable} from '@angular/core';
//import {USER_DATA } from './mock';
import { Http } from '@angular/http';
import  'rxjs/add/operator/map';
import {User} from './user';

@Injectable()

export class  UserService{

	constructor(private http:Http){}

	getUserData(){
		return this.http.get("app/user-data.json")
		.map((response)=><User[]>response.json().data);
		
	}


//above function in old javadscript method

/*return this.http.get("app/user-data.json")
		.map(function(response){

			return <User[]>response.json().data
	});*/



	getJsonData(){
		return this.http.get("http://date.jsontest.com")
		.map((response)=>response.json());

	}
}