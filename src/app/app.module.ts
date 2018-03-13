import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { BasicParamsComponent } from './basic-params/basic-params.component';
import { AdditionalParamsComponent } from './additional-params/additional-params.component';
import { SpecificityCheckingComponent } from './specificity-checking/specificity-checking.component';
import { ResultComponent } from './result/result.component';
import { DescriptionDialogComponent } from './description-dialog/description-dialog.component';
import { } from './pa'

import { DescriptionDialogService } from './description-dialog/description-dialog.service';
import { ParamsValidationService } from './params-validation/params-validation.service';
import { DataService } from './data-share/data.service';
import { ServerService } from './server/server.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainComponent } from './main/main.component';

const appRoutes: Routes = [
  { path: 'result/:id', component: ResultComponent },
  { path: 'main', component: MainComponent },
  { path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BasicParamsComponent,
    AdditionalParamsComponent,
    SpecificityCheckingComponent,
    ResultComponent,
    DescriptionDialogComponent,
    PageNotFoundComponent,
    MainComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpModule
  ],
  providers: [
    DescriptionDialogService,
    ParamsValidationService,
    DataService,
    ServerService
  ],
  entryComponents: [DescriptionDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
