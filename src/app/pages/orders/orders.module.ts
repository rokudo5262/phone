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
import { OrdersComponent } from './orders.component';
import { OrdersRoutingModule } from './orders-routing.module';
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
        OrdersRoutingModule,
    ],
    declarations: [
        OrdersComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
})
export class OrdersModule {
}