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
import { StaffsEffect } from '../staffs/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../../environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { CustomersPageComponent, CustomersDetailComponent } from './containers';
import { CustomersAddComponent, CustomersUpdateComponent, CustomersSmartTableComponent } from './components';
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
        Ng2SmartTableModule,
        // -------------------------------------------------------------
        CustomersRoutingModule,
        // -------------------------------------------------------------
        StoreModule.forFeature(FeatureKey, reducer),
        // -------------------------------------------------------------
        EffectsModule.forFeature([StaffsEffect]),
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
