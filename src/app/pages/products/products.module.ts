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
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsPageComponent } from './containers/products-page/products-page.component';
import { ProductsAddComponent, ProductsUpdateComponent, ProductsSmartTableComponent } from './components';
import { ProductsDetailComponent } from './containers/products-detail/products-detail.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { FeatureKey, reducer } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffect } from './effects';
import { environment } from '../../../environments/environment';
import { ThemeModule } from '../../@theme/theme.module';
import { NgSelectModule } from '@ng-select/ng-select';

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
        // -------------------------------------------------------------
        ProductsRoutingModule,
        ThemeModule,
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
        }),
        StoreModule.forFeature(FeatureKey, reducer),
        EffectsModule.forFeature([ProductsEffect]),
        Ng2SmartTableModule,
        NgSelectModule,
    ],
    declarations: [
        ProductsComponent,
        ProductsPageComponent,
        ProductsAddComponent,
        ProductsUpdateComponent,
        ProductsSmartTableComponent,
        ProductsDetailComponent,
    ],
    entryComponents: [
        ProductsAddComponent,
        ProductsUpdateComponent,
    ],
    providers: [
    ],
})
export class ProductsModule {
}
