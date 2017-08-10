import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Primer3Service } from '../primer3.service';
import { P3DataSharingService } from '../p3-data-sharing.service';

@Component({
  selector: 'app-submit-area',
  templateUrl: './submit-area.component.html',
  styleUrls: ['./submit-area.component.css']
})
export class SubmitAreaComponent implements OnInit {

  result: any;

  @Output() updateResult: EventEmitter<any> = new EventEmitter();

  constructor(
    private primer3Service: Primer3Service,
    private p3DataSharingSerice: P3DataSharingService
  ) { }

  ngOnInit() {
  }

  submit(){
    console.log('submit');
    var task = {};
    this.p3DataSharingSerice.p3Input['SEQUENCE_TEMPLATE'] = 'ACAAGATGCCATTGTCCCCCGGCCTCCTGCTGCTGCTGCTCTCCGGGGCCACGGCCACCGCTGCCCTGCCCCTGGAGGGTGGCCCCACCGGCCGAGACAGCGAGCATATGCAGGAAGCGGCAGGAATAAGGAAAAGCAGCCTCCTGACTTTCCTCGCTTGGTGGTTTGAGTGGACCTCCCAGGCCAGTGCCGGGCCCCTCATAGGAGAGGAAGCTCGGGAGGTGGCCAGGCGGCAGGAAGGCGCACCCCCCCAGCAATCCGCGCGCCGGGACAGAATGCCCTGCAGGAACTTCTTCTGGAAGACCTTCTCCTCCTGCAAATAAAACCTCACCCATGAATGCTCACGCAAGTTTAATTACAGACCTGAA'
    task['input'] = this.p3DataSharingSerice.p3Input;
    this.primer3Service.sendP3Request(task)
      .then(p3Status => this.getResult(p3Status['result_url']))
  }
  reset(){
    console.log('reset');
  }

  getResult(url){
    this.primer3Service.getP3Result(url)
      .then(p3Result => this.validateResult(p3Result))
      .catch(err => this.getResult(url));
  }
  validateResult(p3Result){
    console.log(p3Result);
    this.updateResult.emit(null);
  }

}
