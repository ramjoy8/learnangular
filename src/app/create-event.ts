import {Component} from '@angular/core'
import {  Router } from '@angular/router';

@Component({

templateUrl:'./create-event.html'


})

export class CreateEvent{


    constructor(private route:Router){

    }
    Cancel()
    {
         this.route.navigate([''])
    }

}