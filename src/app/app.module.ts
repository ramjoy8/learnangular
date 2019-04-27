import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { Main } from './main.component'
import {NavBar} from  './nav.bar'
import {EventList} from './event-list.component'
import {pageEnd} from './page-end.component'
import {eventThumbnail} from './event-thumbnail.component'
import {EventDataService} from './eventdata.service'
import{EventDetails} from './event-details'
import {CreateEvent} from './create-event'
import {Error} from './error-page'
import {RouteActivator} from './routeactivator'
import { HttpClientModule } from '@angular/common/http'
@NgModule({
  declarations: [
    Main,
    NavBar,
    EventList,
    pageEnd,
    eventThumbnail,
    EventDetails,
    CreateEvent,
    Error
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EventDataService,RouteActivator],
  bootstrap: [Main]
})
export class AppModule { }
