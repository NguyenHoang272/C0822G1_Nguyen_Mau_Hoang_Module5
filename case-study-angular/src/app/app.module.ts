import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FacilityListComponent } from './facility/facility-list/facility-list.component';
import { HomeComponent } from './home/home.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { FacilityAddComponent } from './facility/facility-add/facility-add.component';
import { FacilityEditComponent } from './facility/facility-edit/facility-edit.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        NavigationComponent,
        FacilityListComponent,
        HomeComponent,
        CustomerListComponent,
        FacilityAddComponent,
        FacilityEditComponent,
        CustomerAddComponent,
        CustomerEditComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
