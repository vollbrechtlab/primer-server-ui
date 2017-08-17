import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, ValidatorFn } from '@angular/forms';

import { P3Service } from '../p3.service';
import { SettingFormValidationService } from '../setting-form-validation.service';

@Component({
  selector: 'app-sequence-settings',
  templateUrl: './sequence-settings.component.html',
  styleUrls: ['./sequence-settings.component.css']
})
export class SequenceSettingsComponent implements OnInit {
  /* Sequence template input */
  sequence_length = 0;
  gc_content = 0;
  settingForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private p3Service: P3Service,
    private sfvService: SettingFormValidationService
  ) { }

  ngOnInit() {
    this.settingForm = this.fb.group({
      SEQUENCE_TEMPLATE_INPUT: ['', [
        Validators.required,
        this.sfvService.sequenceTemplateValidator()
      ]],
      PRIMER_PICK_LEFT_PRIMER: [true],
      SEQUENCE_PRIMER: ['', this.sfvService.nucleotideSequenceValidator()],
      PRIMER_PICK_INTERNAL_OLIGO: [false],
      SEQUENCE_INTERNAL_OLIGO: ['', this.sfvService.nucleotideSequenceValidator()],
      PRIMER_PICK_RIGHT_PRIMER: [true],
      SEQUENCE_PRIMER_REVCOMP: ['', this.sfvService.nucleotideSequenceValidator()]
    });
  }

}

