import {Injectable} from '@angular/core'
import {CanActivate, Router, ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router'
import { EventDataService } from './eventdata.service';

@Injectable()
export class RouteActivator {

constructor(private eventdata:EventDataService,private route:Router ){

}

canActivate(router:ActivatedRouteSnapshot){

    const eventExits = !!this.eventdata.getEventById(+router.params['id'])

    
    if(!eventExits)
           this.route.navigate(['error'])
    return eventExits       
}

}