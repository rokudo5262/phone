import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoresComponent } from './stores.component';
import { StoresPageComponent } from './containers/stores-page/stores-page.component';
const routes: Routes = [{
  path: '',
  component: StoresComponent,
  children: [
    { path: 'library', component: StoresPageComponent },
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
