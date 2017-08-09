import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit-area',
  templateUrl: './submit-area.component.html',
  styleUrls: ['./submit-area.component.css']
})
export class SubmitAreaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submit(){
    console.log('submit');
  }
  reset(){
    console.log('reset');
  }

}
