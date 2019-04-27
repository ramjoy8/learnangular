import { NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import {UserRoutingModule} from './user-routing.module'
import {LoginUser} from './login.component'

@NgModule({
declarations: [
    LoginUser
  ],
  imports: [
    CommonModule,
    UserRoutingModule
    
  ],
  providers: [],

}
)
export class UserModule { }