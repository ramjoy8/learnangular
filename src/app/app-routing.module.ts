import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{EventList} from './event-list.component'
import {EventDetails} from './event-details'
import { CreateEvent } from './create-event';
import {Error} from './error-page'
import { RouteActivator } from './routeactivator';

const routes: Routes = [
 
 {path :'',component: EventList ,pathMatch:'full'  },
 {path:'events/:id',component :EventDetails,canActivate:[RouteActivator]},
 {path:'events/new',component:CreateEvent},
 {path:'error',component:Error},
 {path:'user',loadChildren:'./user/user.module#UserModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
