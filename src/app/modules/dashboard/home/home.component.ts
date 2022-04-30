import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  activeType:string='default'
  onColorChange(type:any):void{
    this.activeType=type
    console.log(this.activeType)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
