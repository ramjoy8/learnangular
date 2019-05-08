import {Component} from '@angular/core'
import{EventDataService} from './eventdata.service'
import {ActivatedRoute} from '@angular/router'
import {map} from 'rxjs/operators'


@Component({

selector:'event-details',
templateUrl : 'event-details.html'


})

export class EventDetails{

event
constructor(private eventdata: EventDataService,private router:ActivatedRoute){

}

ngOnInit(){

    
    this.event=this.router.snapshot.data['eventdetails']
    console.log(this.event)
}

}