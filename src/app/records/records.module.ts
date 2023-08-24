import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { AddRecordComponent } from './add-record/add-record.component';
import { RecordCardComponent } from './record-card/record-card.component';
import { RecordsComponent } from './records/records.component';
import { ViewRecordComponent } from './view-record/view-record.component';



@NgModule({
  declarations: [
    AddRecordComponent,
    ViewRecordComponent,
    RecordsComponent,
    RecordCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule
  ],
  exports: [RecordsComponent]
})
export class RecordsModule { }
