import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sequence-settings',
  templateUrl: './sequence-settings.component.html',
  styleUrls: ['./sequence-settings.component.css']
})
export class SequenceSettingsComponent implements OnInit {

  /* Sequence template input */
  SEQUENCE_TEMPLATE_INPUT = "";
  SEQUENCE_TEMPLATE = "";
  sequence_length = 0;
  gc_content = 0;
  isSequenceOk = true;

  /* Settings */

  // pick condition
  PRIMER_PICK_LEFT_PRIMER = true;
  SEQUENCE_PRIMER: string;
  PRIMER_PICK_INTERNAL_OLIGO = false;
  SEQUENCE_INTERNAL_OLIGO: string;
  PRIMER_PICK_RIGHT_PRIMER = true;
  SEQUENCE_PRIMER_REVCOMP: string;
  // product size
  PRIMER_PRODUCT_SIZE_MIN: number;
  PRIMER_PRODUCT_SIZE_MAX: number;
  // targets
  SEQUENCE_TARGET: string;
  // excluded regions
  SEQUENCE_INTERNAL_EXCLUDED_REGION: string;
  // primer melting temp
  PRIMER_MIN_TM = 57.0;
  PRIMER_OPT_TM = 60.0;
  PRIMER_MAX_TM = 63.0;
  // max tm difference
  PRIMER_PAIR_MAX_DIFF_TM = 100.0;
  // salt correction formula
  PRIMER_SALT_CORRECTIONS = 1;
  PRIMER_SALT_CORRECTIONS_OPTIONS = [
    {value: 0, viewValue: 'Schildkraut and Lifson 1965'},
    {value: 1, viewValue: 'SantaLucia 1998'},
    {value: 2, viewValue: 'Owczarzy et. 2004'}
  ];
  // table of thermodynamic parameters
  PRIMER_TM_FORMULA = 1;
  PRIMER_TM_FORMULA_OPTIONS = [
    {value: 0, viewValue: 'Breslauer et al. 1986'},
    {value: 1, viewValue: 'SantaLucia 1998'}
  ];

  constructor() { }

  ngOnInit() {
  }

  calcParam(){
    this.SEQUENCE_TEMPLATE_INPUT = this.SEQUENCE_TEMPLATE_INPUT.toUpperCase();
    this.SEQUENCE_TEMPLATE = this.SEQUENCE_TEMPLATE_INPUT;
    this.validateSequenceInput();
    this.calcSequenceLength();
    this.calcGcContent();
    this.calcProdSize();
  }

  validateSequenceInput() {
    for(var i = 0; i < this.SEQUENCE_TEMPLATE.length; i++){
      if(!(this.SEQUENCE_TEMPLATE[i] == 'A' || this.SEQUENCE_TEMPLATE[i] == 'G' || this.SEQUENCE_TEMPLATE[i] == 'C' || this.SEQUENCE_TEMPLATE[i] == 'T')){
        this.isSequenceOk = false;
        return false;
      }
    }
    this.isSequenceOk = true;
    return true;
  }
  calcSequenceLength() {
    this.sequence_length = this.SEQUENCE_TEMPLATE.length;
  }
  calcGcContent() {
    if(this.sequence_length == 0){
      return 0;
    }
    var numGc = 0;
    for(var i = 0; i < this.SEQUENCE_TEMPLATE.length; i++){
      if(this.SEQUENCE_TEMPLATE[i] == 'G' || this.SEQUENCE_TEMPLATE[i] == 'C'){
        ++numGc;
      }
    }
    this.gc_content = Math.round(numGc/this.sequence_length*100);
  }
  calcProdSize() {
    this.PRIMER_PRODUCT_SIZE_MIN = Math.round(this.sequence_length/3);
    this.PRIMER_PRODUCT_SIZE_MAX = this.sequence_length;
  }

}
