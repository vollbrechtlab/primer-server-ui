import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';

import {P3DataService} from '../p3-data/p3-data.service';
import { DescriptionDialogService } from '../description-dialog/description-dialog.service';


@Component({
  selector: 'app-additional-params',
  templateUrl: './additional-params.component.html',
  styleUrls: ['./additional-params.component.css']
})
export class AdditionalParamsComponent implements OnInit {

  myControl: FormControl = new FormControl();

  options = [
    'One',
    'Two',
    'Three'
   ];

  filteredOptions: Observable<string[]>;

  selectedParams: any[] = [];
  selectedParamNames: string[] = [];

  paramOption: string;

  constructor(
    private p3Service: P3DataService,
    public dDialogService: DescriptionDialogService
  ){ }
  
  ngOnInit() {
    this.options = Object.keys(this.p3Service.params);
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val))
      );
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
    let temp = this.p3Service.params[this.paramOption];
    if(temp == null){
      console.log("doesnt exist")
    } else {
      if(!this.selectedParamNames.includes(this.paramOption)){
        this.selectedParams.push(temp);
        this.selectedParamNames.push(this.paramOption);
        
      }
      this.paramOption = '';
    }
  }

}
