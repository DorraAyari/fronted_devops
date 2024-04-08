import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { ReadComponent } from './read/read.component';
import { FormsModule } from '@angular/forms'; // Importez FormsModule


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    UpdateComponent,
    ReadComponent

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Add HttpClientModule here
    FormsModule // Add FormsModule to the imports array

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }