import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
@Component({


	selector:'observe-comp',
	templateUrl:'app/template/observable.component.html'
})
export class ObservableComponent{
  data: Observable<Array<number>>;
  values :number[]=[100];
unsub :any;
  stopObserver(){
  	this.unsub.unsubscribe();
  }
  startObserver(){
  	this.data= new Observable((observer:any)=>{
            setTimeout(()=>observer.next(101),1000);
            setTimeout(()=>observer.next(102),2000);
            setTimeout(()=>observer.next(103),3000);
            setTimeout(()=>observer.next(104),4000);
            setTimeout(()=>observer.next(105),5000);
            setTimeout(()=>observer.complete(),6000);
  	});
  	this.unsub =this.data.subscribe((value:any)=>{this.values.push(value);

  	})
  }


}
