import { Injectable } from '@angular/core';
import { P3Input } from './p3-input';
import { SpecCheckInput } from './spec-check-input';

import { SPEC_CHECK_CONST } from '../../environments/specificity-checking';

/** Shares all the variables, some basic functions **/
@Injectable()
export class DataService {

  main : {task: {primer3_data:P3Input, spec_check:SpecCheckInput, format:string}, gc_content:number, length:number};

  constructor(){
    this.resetMain();
  }

  resetMain(){
    this.main = {
      task: {
        primer3_data: new P3Input(),
        spec_check: new SpecCheckInput,
        format: 'better'
      },
      // for sequence template in basic settings
      gc_content: 0,
      length: 0
    };

    // set default values for basic settings
    this.main.task.primer3_data.SEQUENCE_TEMPLATE = '';
    this.main.task.primer3_data.PRIMER_PICK_LEFT_PRIMER = true;
    this.main.task.primer3_data.SEQUENCE_PRIMER = null;
    this.main.task.primer3_data.PRIMER_PICK_INTERNAL_OLIGO = false;
    this.main.task.primer3_data.SEQUENCE_INTERNAL_OLIGO = null;
    this.main.task.primer3_data.PRIMER_PICK_RIGHT_PRIMER = true;
    this.main.task.primer3_data.SEQUENCE_PRIMER_REVCOMP = null;
    this.main.task.primer3_data.PRIMER_PRODUCT_SIZE_RANGE = [[100, 300]];
    this.main.task.primer3_data.SEQUENCE_TARGET = null;
    this.main.task.primer3_data.SEQUENCE_EXCLUDED_REGION = null;
    this.main.task.primer3_data.PRIMER_MIN_TM = 57;
    this.main.task.primer3_data.PRIMER_OPT_TM = 60;
    this.main.task.primer3_data.PRIMER_MAX_TM = 63;
    this.main.task.primer3_data.PRIMER_PAIR_MAX_DIFF_TM = 3;
    this.main.task.primer3_data.PRIMER_SALT_CORRECTIONS = 1;
    this.main.task.primer3_data.PRIMER_TM_FORMULA = 1;

    // set default values for spec check
    this.main.task.spec_check.GENOME = SPEC_CHECK_CONST.GENOME_OPTIONS[0]['value'];
    this.main.task.spec_check.TOTAL_SPECIFICITY_MISMATCH = 2;
    this.main.task.spec_check.SEND_SPECIFICITY_MISMATCH = 2;
    this.main.task.spec_check.SEND_MISMATCH_REGION_LENGTH = 5;
    this.main.task.spec_check.TOTAL_MISMATCH_IGNORE = 6;
    this.main.task.spec_check.MAX_TARGET_SIZE = 3000;
  }

}