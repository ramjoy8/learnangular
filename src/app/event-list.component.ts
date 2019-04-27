import {Component} from '@angular/core'
import {EventDataService} from './eventdata.service'
@Component({

selector : 'event-list',
template :`<h1>Upcoming Events</h1>
<hr/>
<div class="row">
<div   *ngFor="let event of events" class="col-md-5">
<event-thumbnail   [event]="event"> </event-thumbnail>
</div>
</div>
`


})

export class EventList{

  events:any

  constructor(private eventdata:EventDataService) {


  }
ngOnInit(){
return this.eventdata.getEventData().subscribe(events=>this.events=events)
}
}