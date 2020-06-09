import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductsPageComponent } from './containers/products-page/products-page.component';
import { ProductsDetailComponent } from './containers/products-detail/products-detail.component';
const routes: Routes = [{
  path: '',
  component: ProductsComponent,
  children: [
    { path: 'library', component: ProductsPageComponent },
    { path: 'product/:productId', component: ProductsDetailComponent },
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
export class ProductsRoutingModule {
}
