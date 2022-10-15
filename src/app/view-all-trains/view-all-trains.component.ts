import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all-trains',
  templateUrl: './view-all-trains.component.html',
  styleUrls: ['./view-all-trains.component.css']
})
export class ViewAllTrainsComponent implements OnInit {

  constructor(private myApi:ApiService) {
    this.fetchData()
   }

  fetchData = ()=>{
    this.myApi.dataList().subscribe(
      (data)=>{
        this.trainData = data
      }
    )
  }

  trainData:any = {}

  ngOnInit(): void {
  }

}
