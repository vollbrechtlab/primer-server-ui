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
  sequence_length: number;
  gc_content: number;
  isSequenceOk: boolean;

  /* Settings */
  // pick condition
  PRIMER_PICK_LEFT_PRIMER_INPUT: number;
  SEQUENCE_PRIMER_INPUT: string;
  PRIMER_PICK_INTERNAL_OLIGO_INPUT: number;
  SEQUENCE_INTERNAL_OLIGO_INPUT: string;
  PRIMER_PICK_RIGHT_PRIMER_INPUT: number;
  SEQUENCE_PRIMER_REVCOMP_INPUT: string;
  // product size
  PRIMER_PRODUCT_SIZE_MIN_INPUT: number;
  PRIMER_PRODUCT_SIZE_MAX_INPUT: number;
  // targets
  SEQUENCE_TARGET_INPUT: string;
  // excluded regions
  SEQUENCE_EXCLUDED_REGION_INPUT: string;
  // primer melting temp
  PRIMER_MIN_TM_INPUT: number;
  PRIMER_OPT_TM_INPUT: number;
  PRIMER_MAX_TM_INPUT: number;
  // max tm difference
  PRIMER_PAIR_MAX_DIFF_TM_INPUT: number;
  // salt correction formula
  PRIMER_SALT_CORRECTIONS_INPUT: number;
  PRIMER_SALT_CORRECTIONS_INPUT_OPTIONS: Array<{}>;
  // table of thermodynamic parameters
  PRIMER_TM_FORMULA_INPUT: number;
  PRIMER_TM_FORMULA_INPUT_OPTIONS: Array<{}>;

  constructor(private p3Service: P3Service) { }

  ngOnInit() {
    this.SEQUENCE_TEMPLATE_INPUT = this.p3Service.params['SEQUENCE_TEMPLATE']["default_value"];
    this.PRIMER_PICK_LEFT_PRIMER_INPUT = parseInt(this.p3Service.params['PRIMER_PICK_LEFT_PRIMER']["default_value"]);
    this.SEQUENCE_PRIMER_INPUT = this.p3Service.params['SEQUENCE_PRIMER']["default_value"];
    this.PRIMER_PICK_INTERNAL_OLIGO_INPUT = parseInt(this.p3Service.params['PRIMER_PICK_INTERNAL_OLIGO']["default_value"]);
    this.SEQUENCE_INTERNAL_OLIGO_INPUT = this.p3Service.params['SEQUENCE_INTERNAL_OLIGO']["default_value"];
    this.PRIMER_PICK_RIGHT_PRIMER_INPUT = parseInt(this.p3Service.params['PRIMER_PICK_RIGHT_PRIMER']["default_value"]);
    this.SEQUENCE_PRIMER_REVCOMP_INPUT = this.p3Service.params['SEQUENCE_PRIMER_REVCOMP']["default_value"];
    this.PRIMER_PRODUCT_SIZE_MIN_INPUT = this.p3Service.convertRangelistToArr(this.p3Service.params['PRIMER_PRODUCT_SIZE_RANGE']["default_value"])[0][0];
    this.PRIMER_PRODUCT_SIZE_MAX_INPUT = this.p3Service.convertRangelistToArr(this.p3Service.params['PRIMER_PRODUCT_SIZE_RANGE']["default_value"])[0][1];
    this.SEQUENCE_TARGET_INPUT = this.p3Service.params['SEQUENCE_TARGET']["default_value"];
    this.SEQUENCE_EXCLUDED_REGION_INPUT = this.p3Service.params['SEQUENCE_TARGET']["default_value"];
    this.PRIMER_MIN_TM_INPUT = parseInt(this.p3Service.params['PRIMER_MIN_TM']["default_value"]);
    this.PRIMER_OPT_TM_INPUT = parseInt(this.p3Service.params['PRIMER_OPT_TM']["default_value"]);
    this.PRIMER_MAX_TM_INPUT = parseInt(this.p3Service.params['PRIMER_MAX_TM']["default_value"]);
    this.PRIMER_PAIR_MAX_DIFF_TM_INPUT = 3;
    this.PRIMER_SALT_CORRECTIONS_INPUT = parseInt(this.p3Service.params['PRIMER_SALT_CORRECTIONS']["default_value"]);
    this.PRIMER_TM_FORMULA_INPUT = parseInt(this.p3Service.params['PRIMER_TM_FORMULA']["default_value"]);

    this.sequence_length = 0;
    this.gc_content = 0;
    this.isSequenceOk = true;
    this.PRIMER_SALT_CORRECTIONS_INPUT_OPTIONS = [
      {value: 0, viewValue: 'Schildkraut and Lifson 1965'},
      {value: 1, viewValue: 'SantaLucia 1998'},
      {value: 2, viewValue: 'Owczarzy et. 2004'}
    ];
    this.PRIMER_TM_FORMULA_INPUT_OPTIONS = [
      {value: 0, viewValue: 'Breslauer et al. 1986'},
      {value: 1, viewValue: 'SantaLucia 1998'}
    ];
  }

  shareAllInput(){
    this.p3Service.params['SEQUENCE_TEMPLATE'] = this.SEQUENCE_TEMPLATE_INPUT;
    this.p3Service.params['PRIMER_PICK_LEFT_PRIMER'] = this.PRIMER_PICK_LEFT_PRIMER_INPUT;
    this.p3Service.params['PRIMER_PICK_LEFT_PRIMER'] = this.SEQUENCE_PRIMER_INPUT;
    this.p3Service.params['PRIMER_PICK_INTERNAL_OLIGO'] = this.PRIMER_PICK_INTERNAL_OLIGO_INPUT;
    this.p3Service.params['SEQUENCE_INTERNAL_OLIGO'] = this.SEQUENCE_INTERNAL_OLIGO_INPUT;
    this.p3Service.params['PRIMER_PICK_RIGHT_PRIMER'] = this.PRIMER_PICK_RIGHT_PRIMER_INPUT; 
    this.p3Service.params['SEQUENCE_PRIMER_REVCOMP'] = this.SEQUENCE_PRIMER_REVCOMP_INPUT; 
    this.p3Service.params['PRIMER_PRODUCT_SIZE_RANGE'][0][0] = this.PRIMER_PRODUCT_SIZE_MIN_INPUT;
    this.p3Service.params['PRIMER_PRODUCT_SIZE_RANGE'][0][1] = this.PRIMER_PRODUCT_SIZE_MAX_INPUT;
    this.p3Service.params['SEQUENCE_TARGET'] = this.p3Service.convertRangelistToArr(this.SEQUENCE_TARGET_INPUT);
    this.p3Service.params['SEQUENCE_TARGET'] = this.p3Service.convertRangelistToArr(this.SEQUENCE_EXCLUDED_REGION_INPUT);
    this.p3Service.params['PRIMER_MIN_TM'] = this.PRIMER_MIN_TM_INPUT;
    this.p3Service.params['PRIMER_OPT_TM'] = this.PRIMER_OPT_TM_INPUT;
    this.p3Service.params['PRIMER_MAX_TM'] = this.PRIMER_MAX_TM_INPUT;
    this.p3Service.params['PRIMER_PAIR_MAX_DIFF_TM'] = this.PRIMER_PAIR_MAX_DIFF_TM_INPUT;
    this.p3Service.params['PRIMER_SALT_CORRECTIONS'] = this.PRIMER_SALT_CORRECTIONS_INPUT;
    this.p3Service.params['PRIMER_TM_FORMULA'] = this.PRIMER_TM_FORMULA_INPUT;
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
    for(var i = 0; i < this.p3Service['params']['SEQUENCE_TEMPLATE'].length; i++){
      if(!(this.p3Service['params']['SEQUENCE_TEMPLATE'][i] == 'A' || this.p3Service['params']['SEQUENCE_TEMPLATE'][i] == 'G' || this.p3Service['params']['SEQUENCE_TEMPLATE'][i] == 'C' || this.p3Service['params']['SEQUENCE_TEMPLATE'][i] == 'T')){
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
    this.PRIMER_PRODUCT_SIZE_MIN_INPUT = Math.round(this.sequence_length/3);
    this.PRIMER_PRODUCT_SIZE_MAX_INPUT = this.sequence_length;
  }

}
