import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    NbButtonModule,
    NbCardModule,
    NbInputModule,
    NbWindowModule,
    NbDialogModule,
    NbTreeGridModule,
    NbThemeModule,
    NbListModule,
    NbSpinnerModule,
    NbTabsetModule,
    NbSelectModule,
    NbTooltipModule,
} from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NbAuthModule } from '@nebular/auth';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CustomersComponent } from './customers.component';
import { CustomersRoutingModule } from './customers-routing.module';
import { StoreModule } from '@ngrx/store';
import { FeatureKey, reducer } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../../environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { NgSelectModule } from '@ng-select/ng-select';
import { CustomersPageComponent } from './containers/customers-page/customers-page.component';
import { CustomersAddComponent } from './components/customers-add/customers-add.component';
import { CustomersUpdateComponent } from './components/customers-update/customers-update.component';
import { CustomersDetailComponent } from './containers/customers-detail/customers-detail.component';
import { CustomersSmartTableComponent } from './components/customers-smart-table/customers-smart-table.component';
import { CustomersEffect } from './effects/customers.effect';
import { CustomersPreviewComponent } from './components/customers-preview/customers-preview.component';
@NgModule({
    imports: [
        NbTreeGridModule,
        NbAuthModule,
        NbDialogModule.forChild(),
        NbThemeModule,
        NbButtonModule,
        NbCardModule,
        NbInputModule,
        NbWindowModule,
        NbListModule,
        NbSpinnerModule,
        NbTabsetModule,
        NbSelectModule,
        NbTooltipModule,
        // -------------------------------------------------------------
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        CommonModule,
        // -------------------------------------------------------------
        Ng2SmartTableModule,
        NgSelectModule,
        // -------------------------------------------------------------
        CustomersRoutingModule,
        // -------------------------------------------------------------
        StoreModule.forFeature(FeatureKey, reducer),
        // -------------------------------------------------------------
        EffectsModule.forFeature([CustomersEffect]),
        // -------------------------------------------------------------
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
        }),
        // -------------------------------------------------------------
    ],
    declarations: [
        CustomersComponent,
        CustomersPageComponent,
        CustomersAddComponent,
        CustomersUpdateComponent,
        CustomersDetailComponent,
        CustomersSmartTableComponent,
        CustomersPreviewComponent,
    ],
    entryComponents: [
        CustomersAddComponent,
        CustomersUpdateComponent,
    ],
    providers: [
        CookieService,
    ],
})
export class CustomersModule {
}
