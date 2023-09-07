import { AddRecordComponent } from './add-record/add-record.component';
import { EmotionDetailsChipComponent } from './emotion-details-chip/emotion-details-chip.component';
import { RecordCardComponent } from './record-card/record-card.component';
import { RecordsPageComponent } from './records-page/records-page.component';
import { RecordsComponent } from './records/records.component';
import { ViewRecordComponent } from './view-record/view-record.component';

export const components = [
  ViewRecordComponent,
  RecordsPageComponent,
  RecordsComponent,
  RecordCardComponent,
  EmotionDetailsChipComponent,
  AddRecordComponent
];

export * from './add-record/add-record.component';
export * from './emotion-details-chip/emotion-details-chip.component';
export * from './record-card/record-card.component';
export * from './records/records.component';
export * from './records-page/records-page.component';
export * from './view-record/view-record.component';