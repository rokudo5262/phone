import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { CustomersPageComponent } from './containers/customers-page/customers-page.component';
import { CustomersDetailComponent } from './containers/customers-detail/customers-detail.component';
const routes: Routes = [{
  path: '',
  component: CustomersComponent,
  children: [
    { path: 'library', component: CustomersPageComponent },
    { path: 'customer/:customerId', component: CustomersDetailComponent },
    { path: '', redirectTo: 'library', pathMatch: 'full' },
  ],
}];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class CustomersRoutingModule {
}
