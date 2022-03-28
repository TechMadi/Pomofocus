import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { TimeSlotComponent } from './time-slot/time-slot.component';



@NgModule({
  declarations: [
    TitleComponent,
    TimeSlotComponent
  ],
  imports: [
    CommonModule,
    NgbNavModule
  ],
  exports:[
    TitleComponent,
    TimeSlotComponent
  ]
})
export class ReusableModule { }
