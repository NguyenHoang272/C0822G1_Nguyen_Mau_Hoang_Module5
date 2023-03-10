import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {FacilityListComponent} from "./facility/facility-list/facility-list.component";
import {CustomerListComponent} from "./customer/customer-list/customer-list.component";
import {FacilityAddComponent} from "./facility/facility-add/facility-add.component";
import {FacilityEditComponent} from "./facility/facility-edit/facility-edit.component";
import {CustomerAddComponent} from "./customer/customer-add/customer-add.component";
import {CustomerEditComponent} from "./customer/customer-edit/customer-edit.component";
import {ContractCreateComponent} from "./contract/contract-create/contract-create.component";
import {ContracListComponent} from "./contract/contrac-list/contrac-list.component";



const routes: Routes = [
  {path: '',pathMatch:'full',redirectTo:'home'},
  {path: '',component:HomeComponent},
  {path: 'home',component:HomeComponent},
  {path: 'facility',component:FacilityListComponent},
  {path: 'customer',component:CustomerListComponent},
  {path: 'facility-add',component:FacilityAddComponent},
  {path: 'facility-edit/:id',component:FacilityEditComponent},
  {path: 'customer-add',component:CustomerAddComponent},
  {path: 'customer-edit/:id',component:CustomerEditComponent},
  {path: 'contract-create',component:ContractCreateComponent},
  {path: 'contract',component:ContracListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
