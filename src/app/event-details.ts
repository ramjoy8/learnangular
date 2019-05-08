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

    console.log(this.router.snapshot.params['_id'])
    console.log(this.event)
    this.eventdata.getEventById(this.router.snapshot.params['_id']).subscribe(events=>this.event=events)
    console.log(this.event)
}

}