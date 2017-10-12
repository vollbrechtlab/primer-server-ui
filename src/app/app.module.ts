import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';

import { AngularMaterialModule } from './angular-material/angular-material.module';
import { PrimengModule } from './primeng/primeng.module';

import { AppComponent } from './app.component';
import { Primer3Service } from './primer3.service';
import { P3Service } from './p3.service';
import { DescriptionDialogService } from './description-dialog/description-dialog.service';
import { SettingFormValidationService } from './setting-form-validation.service';
import { PrimerServerService } from './primer-server.service';

import { AdditionalParamComponent } from './additional-param/additional-param.component';
import { SequenceSettingsComponent } from './sequence-settings/sequence-settings.component';
import { SpecificityCheckingComponent } from './specificity-checking/specificity-checking.component';
import { ResultAreaComponent } from './result-area/result-area.component';

import { DescriptionDialogComponent } from './description-dialog/description-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    AdditionalParamComponent,
    SequenceSettingsComponent,
    SpecificityCheckingComponent,
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
    ChartsModule
  ],
  providers: [
    Primer3Service,
    P3Service,
    DescriptionDialogService,
    SettingFormValidationService,
    PrimerServerService
  ],
  entryComponents: [
    DescriptionDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
