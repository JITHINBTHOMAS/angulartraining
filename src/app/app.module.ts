import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StrawhatsComponent } from './strawhats/strawhats.component';
import { HttpComponent } from './http/http.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveComponent } from './reactive/reactive.component';
import { CreateComponent } from './create/create.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    StrawhatsComponent,
    HttpComponent,
    ReactiveComponent,
    CreateComponent,
    FormbuilderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
