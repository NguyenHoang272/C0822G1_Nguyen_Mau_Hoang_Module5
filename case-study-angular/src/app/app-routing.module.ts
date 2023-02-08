import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {FacilityListComponent} from "./facility/facility-list/facility-list.component";
import {CustomerListComponent} from "./customer/customer-list/customer-list.component";
import {AddFacilityComponent} from "./facility/add-facility/add-facility.component";


const routes: Routes = [
  {path: '',pathMatch:'full',redirectTo:'home'},
  {path: '',component:HomeComponent},
  {path: 'home',component:HomeComponent},
  {path: 'facility',component:FacilityListComponent},
  {path: 'customer',component:CustomerListComponent},
  {path: 'add-facility',component:AddFacilityComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
