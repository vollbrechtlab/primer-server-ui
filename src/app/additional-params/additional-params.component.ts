import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';


import {P3DataService} from '../p3-data/p3-data.service';
import { DescriptionDialogService } from '../description-dialog/description-dialog.service';
import { ParamsValidationService } from '../params-validation/params-validation.service';

@Component({
  selector: 'app-additional-params',
  templateUrl: './additional-params.component.html',
  styleUrls: ['./additional-params.component.css']
})
export class AdditionalParamsComponent implements OnInit {

  myControl: FormControl = new FormControl();

  options = [];

  filteredOptions: Observable<string[]>;

  selectedParams: any[] = [];
  selectedParamNames: string[] = [];

  paramOption: string;

  formGroup:FormGroup;

  constructor(
    private p3Service: P3DataService,
    public dDialogService: DescriptionDialogService,
    private pvService: ParamsValidationService
  ){ }
  
  ngOnInit() {
    this.options = Object.keys(this.p3Service.params);
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val))
      );

    this.formGroup = new FormGroup({});
  }

  /**
   * filter parameters
   */
  filter(val: string): string[] {
    return this.options.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

  /**
   * add new parameter to the list
   */
  add(){
    //this.p3Service.p3Input['SEQUENCE_START_CODON_POSITION'] = 1234;
    console.log(this.p3Service.p3Input.SEQUENCE_START_CODON_POSITION);
    let temp = this.p3Service.params[this.paramOption];
    if(temp == null){
      console.log("doesnt exist")
    } else {
      if(!this.selectedParamNames.includes(this.paramOption)){
        this.selectedParams.push(temp);
        this.selectedParamNames.push(this.paramOption);
        
        this.formGroup.addControl(this.paramOption, new FormControl(this.p3Service.p3Input[this.paramOption], this.pvService.simpleValidator(this.paramOption)))
      }
      this.paramOption = '';
    }
  }

  /**
   * Remove parameter from the list
   */
  remove(name:string){
    let i = 0;
    for(i = 0; i < this.selectedParamNames.length; i++){
      if(this.selectedParamNames[i] == name){
        break;
      }
    }
    this.selectedParamNames.splice(i, 1);
    this.selectedParams.splice(i, 1);
    
    this.formGroup.removeControl(name);
  }

}
