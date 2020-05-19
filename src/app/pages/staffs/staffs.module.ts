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
import { StaffsComponent } from './staffs.component';
import { StaffsRoutingModule } from './staffs-routing.module';
import { StaffsPageComponent, StaffsDetailComponent } from './containers';
import { StaffsUpdateComponent, StaffsSmartTableComponent, StaffsAddComponent } from './components';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StaffsEffect } from './effects/staffs.effect';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../../environments/environment';
import { FeatureKey, reducer } from './reducers';

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
        StaffsRoutingModule,
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
        StaffsComponent,
        StaffsPageComponent,
        StaffsAddComponent,
        StaffsUpdateComponent,
        StaffsDetailComponent,
        StaffsSmartTableComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
})
export class StaffsModule {
}
