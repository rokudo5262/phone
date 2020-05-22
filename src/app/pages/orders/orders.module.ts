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
import { OrdersComponent } from './orders.component';
import { OrdersPageComponent, OrdersDetailComponent } from './containers';
import { OrdersAddComponent } from './components/orders-add/orders-add.component';
import { OrdersSmartTableComponent } from './components/orders-smart-table/orders-smart-table.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersEffect } from './effects/orders.effect';
import { FeatureKey, reducer } from './reducers';
import { OrdersUpdateComponent } from './components';
import { ThemeModule } from '../../@theme/theme.module';
import { environment } from '../../../environments/environment.prod';

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
        OrdersRoutingModule,
        CommonModule,
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
        }),
        StoreModule.forFeature(FeatureKey, reducer),
        EffectsModule.forFeature([OrdersEffect]),
        Ng2SmartTableModule,
    ],
    declarations: [
        OrdersComponent,
        OrdersPageComponent,
        OrdersAddComponent,
        OrdersSmartTableComponent,
        OrdersUpdateComponent,
        OrdersDetailComponent,
    ],
    entryComponents: [
        OrdersAddComponent,
        OrdersUpdateComponent,
    ],
    providers: [
        CookieService,
    ],
})
export class OrdersModule {
}
