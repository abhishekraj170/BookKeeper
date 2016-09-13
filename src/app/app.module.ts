import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AllbooksComponent } from './allbooks';

@NgModule({
  imports: [BrowserModule, , FormsModule],
  declarations: [AppComponent, AllbooksComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}