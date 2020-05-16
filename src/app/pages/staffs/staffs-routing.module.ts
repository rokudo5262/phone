import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffsComponent } from './staffs.component';
const routes: Routes = [{
  path: '',
  component: StaffsComponent,
  children: [
    // { path: 'library', component: StaffsComponent },
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
