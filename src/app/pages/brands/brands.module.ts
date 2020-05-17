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
import { BrandsComponent } from './brands.component';
import { BrandsRoutingModule } from './brands-routing.module';
import { BrandsPageComponent } from './containers/brands-page/brands-page.component';
import { environment } from '../../../environments/environment.prod';
import { StoreModule } from '@ngrx/store';
import { FeatureKey } from './reducers';
import { reducer } from './reducers/brands.reducer';
import { BrandsEffect } from './effects/brands.effect';
@NgModule({
    imports: [
        // -------------------------------------------------------------
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
        // -------------------------------------------------------------
        BrandsRoutingModule,
        // -------------------------------------------------------------
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
        }),
        // -------------------------------------------------------------
        StoreModule.forFeature(FeatureKey, reducer),
        // -------------------------------------------------------------
        EffectsModule.forRoot([BrandsEffect]),
        // -------------------------------------------------------------
    ],
    declarations: [
        BrandsComponent,
        BrandsPageComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
})
export class BrandsModule {
}
