import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';

import { P3Service } from '../p3.service';
import { SettingFormValidationService } from '../setting-form-validation.service';
import { DescriptionDialogService } from '../description-dialog/description-dialog.service';

@Component({
  selector: 'app-sequence-settings',
  templateUrl: './sequence-settings.component.html',
  styleUrls: ['./sequence-settings.component.css']
})
export class SequenceSettingsComponent implements OnInit {

  settingForm: FormGroup;

  private fileReader = new FileReader();

  constructor(
    private fb: FormBuilder,
    public p3Service: P3Service,
    private sfvService: SettingFormValidationService,
    public dDialogService: DescriptionDialogService
  ) { }

  ngOnInit() {
    this.settingForm = this.fb.group({
      SEQUENCE_TEMPLATE_INPUT: ['', this.sfvService.sequenceTemplateValidator()],
      PRIMER_PICK_LEFT_PRIMER: [true],
      SEQUENCE_PRIMER: ['', this.sfvService.nucleotideSequenceValidator()],
      PRIMER_PICK_INTERNAL_OLIGO: [false],
      SEQUENCE_INTERNAL_OLIGO: ['', this.sfvService.nucleotideSequenceValidator()],
      PRIMER_PICK_RIGHT_PRIMER: [true],
      SEQUENCE_PRIMER_REVCOMP: ['', this.sfvService.nucleotideSequenceValidator()],
      PRIMER_PRODUCT_SIZE_MIN: [null, this.sfvService.productSizeMinValidator()],
      PRIMER_PRODUCT_SIZE_MAX: [null, this.sfvService.productSizeMaxValidator()],
      SEQUENCE_TARGET: ['', this.sfvService.sequenceRegionValidator('SEQUENCE_TARGET')],
      SEQUENCE_EXCLUDED_REGION: ['', this.sfvService.sequenceRegionValidator('SEQUENCE_EXCLUDED_REGION')],
      PRIMER_MIN_TM: [57],
      PRIMER_OPT_TM: [60],
      PRIMER_MAX_TM: [63],
      PRIMER_PAIR_MAX_DIFF_TM: [3],
      PRIMER_SALT_CORRECTIONS: [1],
      PRIMER_TM_FORMULA: [1],
    });

    this.sfvService.settingForm = this.settingForm;

    // To show the error for the first time
    this.settingForm.controls['SEQUENCE_TEMPLATE_INPUT'].markAsTouched();
    this.settingForm.controls['SEQUENCE_PRIMER'].markAsTouched();
    this.settingForm.controls['SEQUENCE_INTERNAL_OLIGO'].markAsTouched();
    this.settingForm.controls['SEQUENCE_PRIMER_REVCOMP'].markAsTouched();
    this.settingForm.controls['PRIMER_PRODUCT_SIZE_MIN'].markAsTouched();
    this.settingForm.controls['PRIMER_PRODUCT_SIZE_MAX'].markAsTouched();
    this.settingForm.controls['SEQUENCE_TARGET'].markAsTouched();
    this.settingForm.controls['SEQUENCE_EXCLUDED_REGION'].markAsTouched();
    this.settingForm.controls['PRIMER_MIN_TM'].markAsTouched();
    this.settingForm.controls['PRIMER_OPT_TM'].markAsTouched();
    this.settingForm.controls['PRIMER_MAX_TM'].markAsTouched();
    this.settingForm.controls['PRIMER_PAIR_MAX_DIFF_TM'].markAsTouched();
    this.settingForm.controls['PRIMER_SALT_CORRECTIONS'].markAsTouched();
    this.settingForm.controls['PRIMER_TM_FORMULA'].markAsTouched();
  }


  getFormValidationErrors() {
  Object.keys(this.settingForm.controls).forEach(key => {

  const controlErrors: ValidationErrors = this.settingForm.get(key).errors;
  if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          //console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
        });
      }
    });
  }

  // read fa file
  fileChange(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
      let file: File = fileList[0];
      
      this.fileReader.readAsText(file);
      this.fileReader.onloadend = this.loadFileContent.bind(this);
    }
  }

  loadFileContent(e){
    let fileContent = this.fileReader.result;

    let sequenceData = "";
    let splitted = fileContent.split('\n');
    let readSeqNum = 0;
    for(let i = 0; i < splitted.length; i++){
      if(splitted[i].includes('>')){
        readSeqNum++;
        i++;
      }
      if(readSeqNum == 1){
        sequenceData += splitted[i];
      }
      if(readSeqNum > 1){
        break;
      }
    }
    console.log(sequenceData)

    this.settingForm.patchValue({SEQUENCE_TEMPLATE_INPUT: sequenceData});
  }

}

