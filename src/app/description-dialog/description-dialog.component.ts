import { MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';

@Component({
    selector: 'desciption-dialog',
    templateUrl: 'description-dialog.html',
})
export class DescriptionDialogComponent {

    public description: string;

    constructor(public dialogRef: MdDialogRef<DescriptionDialogComponent>) { }
}