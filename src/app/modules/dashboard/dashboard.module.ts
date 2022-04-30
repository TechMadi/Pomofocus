import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DashboardRoutingModule } from './dashboard-routing.modules';
import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { ReusableModule } from '../reusable/reusable.module';
import { TasksComponent } from './tasks/tasks.component';



@NgModule({
  declarations: [
    HomeComponent,
    TasksComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgbNavModule,
    ReusableModule,
    NgbDropdownModule
  ]
})
export class DashboardModule { }
