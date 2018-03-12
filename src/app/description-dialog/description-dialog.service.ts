import { Injectable } from '@angular/core';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';

import { DataService } from '../data-share/data.service';
import { DescriptionDialogComponent } from './description-dialog.component';

@Injectable()
export class DescriptionDialogService {

  constructor(private dialog: MatDialog,
              private dataService: DataService) { }

  /**
   * Show the description dialog
   * @param {string} paramName Parameter name of the description to show
   */
  showDescription(paramName: string){
    let dialogRef: MatDialogRef<DescriptionDialogComponent>;
    dialogRef = this.dialog.open(DescriptionDialogComponent);
    dialogRef.componentInstance.description = this.dataService.params[paramName].description;
  }
}
