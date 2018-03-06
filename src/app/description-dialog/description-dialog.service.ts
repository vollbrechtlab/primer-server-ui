import { Injectable } from '@angular/core';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';

import { P3DataService } from '../p3-data/p3-data.service';
import { DescriptionDialogComponent } from './description-dialog.component';

@Injectable()
export class DescriptionDialogService {

  constructor(private dialog: MatDialog,
              private p3Service: P3DataService) { }

  /**
   * Show the description dialog
   * @param {string} paramName Parameter name of the description to show
   */
  showDescription(paramName: string){
    let dialogRef: MatDialogRef<DescriptionDialogComponent>;
    dialogRef = this.dialog.open(DescriptionDialogComponent);
    dialogRef.componentInstance.description = this.p3Service.params[paramName].description;
  }
}
