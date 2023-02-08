import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FacilityListComponent } from './facility/facility-list/facility-list.component';
import { AddFacilityComponent } from './facility/add-facility/add-facility.component';
import { HomeComponent } from './home/home.component';
import {EditFacilityComponent} from "./facility/edit-facility/edit-facility.component";
import { CustomerListComponent } from './customer/customer-list/customer-list.component';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        NavigationComponent,
        FacilityListComponent,
        AddFacilityComponent,
        HomeComponent,
        EditFacilityComponent,
        CustomerListComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
