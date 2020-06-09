import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoresComponent } from './stores.component';
import { StoresPageComponent } from './containers/stores-page/stores-page.component';
import { StoresDetailComponent } from './containers/stores-detail/stores-detail.component';
const routes: Routes = [{
  path: '',
  component: StoresComponent,
  children: [
    { path: 'library', component: StoresPageComponent },
    { path: 'store/:storeId', component: StoresDetailComponent },
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
export class StoresRoutingModule {
}
