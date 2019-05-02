import {Component} from '@angular/core'
import{EventDataService} from './eventdata.service'
import {ActivatedRoute} from '@angular/router'


@Component({

selector:'event-details',
templateUrl : 'event-details.html'


})

export class EventDetails{

event
constructor(private eventdata: EventDataService,private router:ActivatedRoute){

}
ngOnInit(){
this.eventdata.getEventById(+this.router.snapshot.params['id']).subscribe(event=>{

    this.event = event ;
})
}
}