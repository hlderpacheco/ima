import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { ScoresComponent } from './components/scores/scores.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddUserComponent } from './components/forms/add-user/add-user.component';
import { ActiveScenesComponent } from './components/active-scenes/active-scenes.component';

const routes: Routes = [
  {path:'', redirectTo:'users-table', pathMatch:'full' },
  {path:'users-table',component:UsersComponent},
  {path:'active-scenes',component:ActiveScenesComponent},
  {path:'score-scene', component:ScoresComponent},
  {path:'add-user', component:AddUserComponent},
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
