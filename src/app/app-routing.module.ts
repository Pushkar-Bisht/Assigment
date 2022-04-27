import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component'
import {ListusersComponent} from "./listusers/listusers.component";
import {UpdateComponent} from "./update/update.component";

const routes: Routes = [
  {path:"",pathMatch:"full",component:ListusersComponent },
  {component:LoginComponent,path:"login" },
  {component:SignupComponent,path:"signup"},
  {component:UpdateComponent,path:"update/:id"},
  {component:ListusersComponent,path:"listuser"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
