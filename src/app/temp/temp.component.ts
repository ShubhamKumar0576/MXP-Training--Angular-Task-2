import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {

  user: any={}
  
  afterSubmit() {
    alert(JSON.stringify(this.user))  
  }

  constructor() { }

  ngOnInit(): void {
  }

}
