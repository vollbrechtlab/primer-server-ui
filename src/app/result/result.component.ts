import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  public constructor(private route: ActivatedRoute) {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id)
  }

  ngOnInit() {
  }

}
