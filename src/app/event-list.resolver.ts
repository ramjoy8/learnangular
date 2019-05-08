import {Injectable} from '@angular/core'
import {Resolve} from '@angular/router'
import {EventDataService} from './eventdata.service'
import {map} from 'rxjs/operators'

@Injectable()

export class EventListResolver implements Resolve<any> {

constructor (private eventdata:EventDataService){


}

resolve(){

    return this.eventdata.getEventData().pipe(map(events=>events))



}

}