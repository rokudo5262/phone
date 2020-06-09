import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffsComponent } from './staffs.component';
import { StaffsPageComponent } from './containers/staffs-page/staffs-page.component';
import { StaffsDetailComponent } from './containers/staffs-detail/staffs-detail.component';
const routes: Routes = [{
  path: '',
  component: StaffsComponent,
  children: [
    { path: 'library', component: StaffsPageComponent },
    { path: 'staff/:staffId', component: StaffsDetailComponent },
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
export class StaffsRoutingModule {
}
