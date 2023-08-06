import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecordsModule } from './records/records.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RecordsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
