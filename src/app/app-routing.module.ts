import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyingleaveComponent } from './applyingleave/applyingleave.component';
import { ApplyleavelistComponent } from './applyleavelist/applyleavelist.component';
import { HomeComponent } from './home/home.component';
import { LeavestatusComponent } from './leavestatus/leavestatus.component';
import { LoginComponent } from './login/login.component';
import { UserlistComponent } from './userlist/userlist.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'applyingleave', component:ApplyingleaveComponent},
  {path:'leavestatus', component:LeavestatusComponent},
  {path:'applyleavelist', component:ApplyleavelistComponent},
  {path:'userlist', component:UserlistComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
