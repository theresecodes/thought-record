import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import * as fromComponents from './components';
import { RecordsRoutingModule } from './records-routing.module';
import { CoreEmotionPipe } from './pipes/core-emotion.pipe';
import { PercentagePipe } from './pipes/percentage.pipe';


@NgModule({
  declarations: [
    ...fromComponents.components,
    CoreEmotionPipe,
    PercentagePipe
  ],
  imports: [
    CommonModule,
    RecordsRoutingModule,
    MaterialModule,
    SharedModule
  ],
  exports: [
    ...fromComponents.components
  ]
})
export class RecordsModule { }
