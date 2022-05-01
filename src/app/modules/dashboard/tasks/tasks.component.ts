import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
addTaskDescription:boolean=false;
showTodoForm:boolean=false;
totalPomodoros:number=0
totalAction:number=0;
estimateTime:number=0;
taskLists:any[]=[
  {
    taskName:'Learning React',
    pomodoros:6,
    completed:0
  },
  {
    taskName:'Learning React',
    pomodoros:6,
    completed:6,
    taskDescription:'Creating pomodoro using react',
  }
]
addTodo:FormGroup=new FormGroup({
    taskName:new FormControl(''),
    pomodoros:new FormControl(1),
    taskDescription:new FormControl(''),
    project:new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
    this.getSummary()

  }

  displayTodoForm(){
    this.showTodoForm=true
  }
  addTask(form:any){
     console.log(form.value)
  }
  addDescription(){
    this.addTaskDescription=true
  }

  addPomodoros(form :any){
    this.addTodo.patchValue({
      pomodoros:form.pomodoros +1
    })
  }

  removePomodoros(form:any){
    this.addTodo.patchValue({
      pomodoros:form.pomodoros -1
    })
  }

  getSummary(){
    this.totalPomodoros=this.taskLists.map(x=>x.pomodoros).reduce((a,b)=>a+b)
    this.totalAction=this.taskLists.map((x)=>x.pomodoros-x.completed).reduce((a,b)=>a+b)
  }
}
