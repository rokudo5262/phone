import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandsComponent } from './brands.component';
import { BrandsPageComponent } from './containers/brands-page/brands-page.component';
import { BrandsDetailComponent } from './containers/brands-detail/brands-detail.component';
const routes: Routes = [{
  path: '',
  component: BrandsComponent,
  children: [
    { path: 'library', component: BrandsPageComponent },
    { path: 'brand/:brandId', component: BrandsDetailComponent },
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
export class BrandsRoutingModule {
}
