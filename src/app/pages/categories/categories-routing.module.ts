import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories.component';
import { CategoriesPageComponent } from './containers/categories-page/categories-page.component';
import { CategoriesDetailComponent } from './containers/categories-detail/categories-detail.component';

const routes: Routes = [{
  path: '',
  component: CategoriesComponent,
  children: [
    { path: 'library', component: CategoriesPageComponent },
    { path: 'category/:categoryId', component: CategoriesDetailComponent },
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
export class CategoriesRoutingModule {
}
