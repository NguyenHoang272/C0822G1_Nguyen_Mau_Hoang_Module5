import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {ListComponent} from './benh_an/list/list.component';
import {EditComponent} from './benh_an/edit/edit.component';


const routes: Routes = [
  // {path: '', component: HeaderComponent},
  {path: '', component: ListComponent},
  {path: 'edit/:id', component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
