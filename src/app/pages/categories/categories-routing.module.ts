import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories.component';
import { CategoriesPageComponent } from './containers';

const routes: Routes = [{
  path: '',
  component: CategoriesComponent,
  children: [
    { path: 'library', component: CategoriesPageComponent },
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
