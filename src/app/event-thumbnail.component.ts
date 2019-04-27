import {Component, Input} from '@angular/core'

@Component({

selector : 'event-thumbnail',
templateUrl : './event-thumbnail.component.html',
styles :[ `.hoverwell:hover {
    background-color: #485563;
    cursor: pointer;
  }`
  ],


})

export class eventThumbnail{

    @Input() event 



}