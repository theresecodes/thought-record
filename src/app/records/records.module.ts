import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AddRecordComponent } from './add-record/add-record.component';
import { RecordsComponent } from './records/records.component';
import { ViewRecordComponent } from './view-record/view-record.component';



@NgModule({
  declarations: [
    AddRecordComponent,
    ViewRecordComponent,
    RecordsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [RecordsComponent]
})
export class RecordsModule { }
