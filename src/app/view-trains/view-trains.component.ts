import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-trains',
  templateUrl: './view-trains.component.html',
  styleUrls: ['./view-trains.component.css']
})
export class ViewTrainsComponent implements OnInit {

  constructor() { }

  status:boolean = false

  name = "Mike"

  readValues = ()=>{
    this.name = "raju"
    this.status = true
  }

  ngOnInit(): void {
  }

}
