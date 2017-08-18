import { MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';

import { DescriptionDialogService } from './description-dialog.service';

@Component({
    selector: 'confirm-dialog',
    template: `
        <p>{{ descriptionDialogService.description }}</p>
        <button type="button" md-raised-button 
            (click)="dialogRef.close(true)">OK</button>
    `,
})
export class DescriptionDialogComponent {

    constructor(public dialogRef: MdDialogRef<DescriptionDialogComponent>,
                public descriptionDialogService: DescriptionDialogService) { }
}