import {Component} from '@angular/core';
import {MdDialog} from '@angular/material';

import {P3Service} from '../p3.service';
import { DescriptionDialogComponent } from '../description-dialog/description-dialog.component';
import { DescriptionDialogService } from '../description-dialog/description-dialog.service';

@Component({
  selector: 'app-additional-param',
  templateUrl: './additional-param.component.html',
  styleUrls: ['./additional-param.component.css']
})
export class AdditionalParamComponent {

  selectedParams: any[];
  filteredParamsMultiple: any[];
  displayDescription = false;

  constructor(
    public dialog: MdDialog,
    private p3Service: P3Service,
    private descriptionDialogService: DescriptionDialogService
  ) { }

  ngOnInit(){
    let testInitialData = this.p3Service.params['SEQUENCE_ID'];
    testInitialData['name'] = 'SEQUENCE_ID';
    this.selectedParams = [];
    this.selectedParams.push(testInitialData);
  }
  
  filterParamMultiple(event) {
    let query = event.query;
    this.filteredParamsMultiple = this.filterParam(query, this.p3Service.params);
  }
  
  /**
   * Filter the parameters based on the input query
   * Example:
   *     query = 'b'
   *     params = {
   *       'baka': { 'description':'uzai' },
   *       'kuso': { 'description':'kusai' }
   *     }
   *     output = [ {'name':'baka', 'description':'uzai'} ]
   * @param {string} query The query to filter data
   * @param {any} params dictionary of params to filter from
   * @returns {any[]}
   */
  filterParam(query:string, params:any):any[] {
    let filtered : any[] = [];
    // get key names of the params dictionary
    let param_names = Object.keys(params);
    for(let i = 0; i < param_names.length; i++) {
      let param_name = param_names[i];
      if(param_name.toLowerCase().includes(query.toLowerCase())) {
        let param = params[param_name];
        param['name'] = param_name;
        filtered.push(param);
      }
    }
    return filtered;
  }

  onInputTextChange(event){
    console.log(event);
  }

  /**
   * Show the description dialog
   * @param {string} description The description to show
   */
  showDescription(description: string){
    this.descriptionDialogService.description = description;
    this.dialog.open(DescriptionDialogComponent);
  }
        
}

