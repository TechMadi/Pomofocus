import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DashboardRoutingModule } from './dashboard-routing.modules';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { ReusableModule } from '../reusable/reusable.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgbNavModule,
    ReusableModule
  ]
})
export class DashboardModule { }
