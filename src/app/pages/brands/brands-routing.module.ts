import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandsComponent } from './brands.component';
import { BrandsPageComponent } from './containers/brands-page/brands-page.component';
const routes: Routes = [{
  path: '',
  component: BrandsComponent,
  children: [
    { path: 'library', component: BrandsPageComponent },
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
