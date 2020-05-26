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
import { StoresComponent } from './stores.component';
import { StoresRoutingModule } from './stores-routing.module';
import { CookieService } from 'ngx-cookie-service';
import { StoreModule } from '@ngrx/store';
import { FeatureKey, reducer } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoresEffect } from './effects/stores.effect';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../../environments/environment';
import { StoresPageComponent } from './containers/stores-page/stores-page.component';
import { StoresAddComponent } from './components/stores-add/stores-add.component';
import { StoresUpdateComponent } from './components/stores-update/stores-update.component';
import { StoresDetailComponent } from './containers/stores-detail/stores-detail.component';
import { StoresSmartTableComponent } from './components/stores-smart-table/stores-smart-table.component';

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
        StoresRoutingModule,
        // -------------------------------------------------------------
        StoreModule.forFeature(FeatureKey, reducer),
        // -------------------------------------------------------------
        EffectsModule.forFeature([StoresEffect]),
        // -------------------------------------------------------------
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
        }),
    ],
    declarations: [
        StoresComponent,
        StoresPageComponent,
        StoresAddComponent,
        StoresUpdateComponent,
        StoresDetailComponent,
        StoresSmartTableComponent,
    ],
    entryComponents: [
        StoresAddComponent,
        StoresUpdateComponent,
    ],
    providers: [
        CookieService,
    ],
})
export class StoresModule {
}
