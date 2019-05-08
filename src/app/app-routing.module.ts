import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{EventList} from './event-list.component'
import {EventDetails} from './event-details'
import { CreateEvent } from './create-event';
import {Error} from './error-page'
import { RouteActivator } from './routeactivator';
import { EventListResolver } from './event-list.resolver';
import { EventDetailResolver } from './event-details.resolver';

const routes: Routes = [
 
 {path :'',component: EventList ,pathMatch:'full' ,resolve :{events:EventListResolver} },
 {path:'events/new',component:CreateEvent},
 {path:'event/:_id',component :EventDetails,resolve :{eventdetails:EventDetailResolver}},
 
 {path:'error',component:Error},
 {path:'user',loadChildren:'./user/user.module#UserModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
