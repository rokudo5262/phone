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
import { StoreModule } from '@ngrx/store';
import { FeatureKey } from './reducers';
import { reducer } from './reducers/brands.reducer';
import { BrandsEffect } from './effects/brands.effect';
import { EffectsModule } from '@ngrx/effects';
import { BrandsSmartTableComponent } from './components/brands-smart-table/brands-smart-table.component';
import { BrandsAddComponent } from './components/brands-add/brands-add.component';
import { BrandsDetailComponent } from './containers/brands-detail/brands-detail.component';
import { BrandsUpdateComponent } from './components/brands-update/brands-update.component';
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
        StoreModule.forFeature(FeatureKey, reducer),
        // -------------------------------------------------------------
        EffectsModule.forFeature([BrandsEffect]),
        // -------------------------------------------------------------
    ],
    declarations: [
        BrandsComponent,
        BrandsPageComponent,
        BrandsSmartTableComponent,
        BrandsAddComponent,
        BrandsDetailComponent,
        BrandsUpdateComponent,
    ],
    entryComponents: [
        BrandsAddComponent,
        BrandsUpdateComponent,
    ],
    providers: [
    ],
})
export class BrandsModule {
}