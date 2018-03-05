import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { UploadFormComponent } from './upload-form/upload-form.component';
import { NumberInputDirective } from './number-input.directive';

@NgModule({
  declarations: [
    AppComponent,
    UploadFormComponent,
    NumberInputDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
