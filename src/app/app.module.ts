import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './angular-material/angular-material.module';
import { PrimengModule } from './primeng/primeng.module';

import { AppComponent } from './app.component';
import { Primer3Service } from './primer3.service';
import { P3DataSharingService } from './p3-data-sharing.service';
import { P3Service } from './p3.service';
import { DescriptionDialogService } from './description-dialog/description-dialog.service';
import { SettingFormValidationService } from './setting-form-validation.service';

import { AdditionalParamComponent } from './additional-param/additional-param.component';
import { SequenceSettingsComponent } from './sequence-settings/sequence-settings.component';
import { SpecificityCheckingComponent } from './specificity-checking/specificity-checking.component';
import { SubmitAreaComponent } from './submit-area/submit-area.component';
import { ResultAreaComponent } from './result-area/result-area.component';

import { DescriptionDialogComponent } from './description-dialog/description-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    AdditionalParamComponent,
    SequenceSettingsComponent,
    SpecificityCheckingComponent,
    SubmitAreaComponent,
    ResultAreaComponent,
    DescriptionDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AngularMaterialModule,
    PrimengModule,
    ReactiveFormsModule,
  ],
  providers: [
    Primer3Service,
    P3DataSharingService,
    P3Service,
    DescriptionDialogService,
    SettingFormValidationService
  ],
  entryComponents: [
    DescriptionDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
