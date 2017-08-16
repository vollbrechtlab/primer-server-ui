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
    let testInitialData = {
      "name": "SEQUENCE_ID",
      "description": "Short description of the sequence. It is used as an identifier \nthat is reproduced in the output to enable users to identify the \nsource of the chosen primers.\n\nThis tag must be present if P3_FILE_FLAG is non-zero.",
      "type": "string",
      "default_value": "",
      "setting_type": "additional",
      "form_type": "input_text"
    };
    this.selectedParams = [];
    this.selectedParams.push(testInitialData);
  }
  
  filterParamMultiple(event) {
    let query = event.query;
    this.filteredParamsMultiple = this.filterParam(query, this.p3Service.params);
  }
  
  filterParam(query, params: any):any[] {
    let filtered : any[] = [];
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

  showDescription(description: string){
    this.descriptionDialogService.description = description;
    this.dialog.open(DescriptionDialogComponent);
  }
        
}

