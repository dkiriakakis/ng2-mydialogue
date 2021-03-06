import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeModule } from './home/home.module';
import { AdminModule } from './admin/admin.module';
import { InsertUserModule } from './insert-user/insert-user.module';
import { BlankPageModule } from './blank-page/blankPage.module';
import { BSComponentModule } from './bs-component/bsComponent.module';

import { DashboardComponent } from './dashboard.component';

import { SidebarComponent } from '../shared/index';

import { UserService } from '../services/user.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        HomeModule,
        AdminModule,
        InsertUserModule,
        BSComponentModule,
        BlankPageModule,
    ],
    declarations: [DashboardComponent, SidebarComponent],
    exports: [DashboardComponent, SidebarComponent],
    providers: [UserService]
})

export class DashboardModule { }
