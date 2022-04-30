import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { TimeSlotComponent } from './time-slot/time-slot.component';
import { NavbarComponent } from './layout/navbar/navbar.component';



@NgModule({
  declarations: [
    TitleComponent,
    TimeSlotComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    NgbNavModule
  ],
  exports:[
    TitleComponent,
    TimeSlotComponent,
    NavbarComponent
  ]
})
export class ReusableModule { }
