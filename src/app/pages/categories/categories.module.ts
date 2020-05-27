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
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CookieService } from 'ngx-cookie-service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { StoreModule } from '@ngrx/store';
import { FeatureKey, reducer } from './reducers';
import { ThemeModule } from '../../@theme/theme.module';
import { environment } from '../../../environments/environment';
import { CategoriesComponent } from './categories.component';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesSmartTableComponent } from './components/categories-smart-table/categories-smart-table.component';
import { CategoriesEffects } from './effects';
import { CategoriesAddComponent } from './components/categories-add/categories-add.component';
import { CategoriesUpdateComponent } from './components/categories-update/categories-update.component';
import { CategoriesPageComponent } from './containers/categories-page/categories-page.component';
import { CategoriesDetailComponent } from './containers/categories-detail/categories-detail.component';
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
        ThemeModule,
        RouterModule,
        CategoriesRoutingModule,
        CommonModule,
        // -------------------------------------------------------------
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
        }),
        // -------------------------------------------------------------
        StoreModule.forFeature(FeatureKey, reducer),
        // -------------------------------------------------------------
        EffectsModule.forFeature([CategoriesEffects]),
        // -------------------------------------------------------------
        Ng2SmartTableModule,
        NgSelectModule,
        // -------------------------------------------------------------
    ],
    declarations: [
        CategoriesComponent,
        CategoriesPageComponent,
        CategoriesSmartTableComponent,
        CategoriesAddComponent,
        CategoriesUpdateComponent,
        CategoriesDetailComponent,
    ],
    entryComponents: [
        CategoriesAddComponent,
        CategoriesUpdateComponent,
    ],
    providers: [
        CookieService,
    ],
})
export class CategoriesModule {
}
