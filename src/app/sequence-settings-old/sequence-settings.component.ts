import { Component, OnInit } from '@angular/core';

import { P3Service } from '../p3.service';

@Component({
  selector: 'app-sequence-settings',
  templateUrl: './sequence-settings.component.html',
  styleUrls: ['./sequence-settings.component.css']
})
export class SequenceSettingsComponent implements OnInit {
  /* Sequence template input */
  SEQUENCE_TEMPLATE_INPUT: string;
  sequence_length = 0;
  gc_content = 0;
  isSequenceOk = true;

  constructor(private p3Service: P3Service) { }

  ngOnInit() {
    this.SEQUENCE_TEMPLATE_INPUT = this.p3Service.params['SEQUENCE_TEMPLATE']["default_value"];
  }

  calcParam(){
    this.SEQUENCE_TEMPLATE_INPUT = this.SEQUENCE_TEMPLATE_INPUT.toUpperCase();
    this.p3Service.params['SEQUENCE_TEMPLATE'] = this.SEQUENCE_TEMPLATE_INPUT;
    this.validateSequenceInput();
    this.calcSequenceLength();
    this.calcGcContent();
    this.calcProdSize();
  }

  validateSequenceInput() {
    let sequence = this.p3Service['params']['SEQUENCE_TEMPLATE'];
    for(var i = 0; i < sequence.length; i++){
      let isThisBaseOk = false;
      for(let j = 0; j < this.p3Service.acceptedBaseCodes.length; j++){
        if(sequence[i] == this.p3Service.acceptedBaseCodes[j]) {
          isThisBaseOk = true;
          break;
        } 
      }
      if(!isThisBaseOk) {
        this.isSequenceOk = false;
        return false;
      }
    }
    this.isSequenceOk = true;
    return true;
  }
  calcSequenceLength() {
    this.sequence_length = this.p3Service['params']['SEQUENCE_TEMPLATE'].length;
  }
  calcGcContent() {
    if(this.sequence_length == 0){
      return 0;
    }
    var numGc = 0;
    for(var i = 0; i < this.p3Service['params']['SEQUENCE_TEMPLATE'].length; i++){
      if(this.p3Service['params']['SEQUENCE_TEMPLATE'][i] == 'G' || this.p3Service['params']['SEQUENCE_TEMPLATE'][i] == 'C'){
        ++numGc;
      }
    }
    this.gc_content = Math.round(numGc/this.sequence_length*100);
  }
  calcProdSize() {
    this.p3Service['params']['PRIMER_PRODUCT_SIZE_RANGE'][0][0] = Math.round(this.sequence_length/3);
    this.p3Service['params']['PRIMER_PRODUCT_SIZE_RANGE'][0][1] = this.sequence_length;
  }

}
