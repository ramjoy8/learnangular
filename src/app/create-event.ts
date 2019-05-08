import {Component} from '@angular/core'
import {  Router } from '@angular/router';
import { EventDataService } from './eventdata.service';

@Component({

templateUrl:'./create-event.html'


})

export class CreateEvent{

event     
    constructor(private route:Router,private eventdata:EventDataService){

    }

    saveEvent(formvalues)
    {
        console.log(formvalues)
       this.eventdata.saveEvent(formvalues).subscribe(()=>{

         this.route.navigate([''])
       })
    

    }
    cancel()
    {
         this.route.navigate([''])
     }

}