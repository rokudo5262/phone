import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders.component';
import { OrdersPageComponent } from './containers/orders-page/orders-page.component';
import { OrdersDetailComponent } from './containers/orders-detail/orders-detail.component';

const routes: Routes = [{
  path: '',
  component: OrdersComponent,
  children: [
    { path: 'library', component: OrdersPageComponent },
    { path: 'order/:orderId', component: OrdersDetailComponent },
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
export class OrdersRoutingModule {
}
