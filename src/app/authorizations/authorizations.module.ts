import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';
import { AuthorizationsComponent } from './authorizations.component';
import { AuthorizationsRoutingModule } from './authorizations-routing.module';

@NgModule({
  imports: [
    AuthorizationsRoutingModule,
    ThemeModule,
  ],
  declarations: [
    AuthorizationsComponent,
  ],
})
export class PagesModule {
}
