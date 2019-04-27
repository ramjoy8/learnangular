import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginUser } from './login.component';

const routes: Routes = [
     
    {path:'login',component:LoginUser}
    
   ];
   
   @NgModule({
     imports: [RouterModule.forChild(routes)],
     exports: [RouterModule]
   })
export class UserRoutingModule { }
   