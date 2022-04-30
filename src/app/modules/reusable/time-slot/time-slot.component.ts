import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-time-slot',
  templateUrl: './time-slot.component.html',
  styleUrls: ['./time-slot.component.scss'],
  
})
export class TimeSlotComponent implements OnInit {
  timeSlots:any[]=[
    {
      type:'Pomodoro',
      timer:25
    },
    {
      type:'Short Break',
      timer:5
    },
    {
      type:'Long Break',
      timer:15
    },
  
  ]

  @Output() typeSelected: EventEmitter<string> = new EventEmitter<string>();


  onTypeChange(selectedType:string){ 
    this.typeSelected.emit(selectedType)
  }
  constructor() { }
  timer:number=25
  stopTimer:boolean=false
  ngOnInit(): void {
  }



  start(){
      this.stopTimer=true
    
  }
  stop(){
    this.stopTimer=false
  }

  


 // https://henrikmassow.medium.com/implement-a-countdown-timer-with-rxjs-in-angular-61600d1af00c
}
