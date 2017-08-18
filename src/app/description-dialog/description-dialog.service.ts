import { Injectable } from '@angular/core';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';

import { P3Service } from '../p3.service';
import { DescriptionDialogComponent } from './description-dialog.component';

@Injectable()
export class DescriptionDialogService {

  constructor(private dialog: MdDialog,
              private p3Service: P3Service) { }

  /**
   * Show the description dialog
   * @param {string} paramName Parameter name of the description to show
   */
  showDescription(paramName: string){
    let dialogRef: MdDialogRef<DescriptionDialogComponent>;
    dialogRef = this.dialog.open(DescriptionDialogComponent);
    dialogRef.componentInstance.description = this.p3Service.params[paramName].description;
  }
}
