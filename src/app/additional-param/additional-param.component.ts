import {Component} from '@angular/core';

import {P3Service} from '../p3.service';
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
    private p3Service: P3Service,
    public dDialogService: DescriptionDialogService
  ) { }

  ngOnInit(){
    /*
    let testInitialData = this.p3Service.params['SEQUENCE_ID'];
    testInitialData['name'] = 'SEQUENCE_ID';
    this.selectedParams = [];
    this.selectedParams.push(testInitialData);
    */
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

  /**
   * When the input is changed
   */
  onInputTextChange(event){
    console.log(event);
  }

}
