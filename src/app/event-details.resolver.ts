import {Injectable} from '@angular/core'
import {Resolve, ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router'
import {EventDataService} from './eventdata.service'
import {map} from 'rxjs/operators'

@Injectable()

export class EventDetailResolver  {

constructor (private eventdata:EventDataService){


}

resolve(router:ActivatedRouteSnapshot){
    
    return this.eventdata.getEventById(router.params['_id']).pipe(map(eventdetails=>eventdetails))



}

}