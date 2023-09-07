import { Component } from '@angular/core';
import { EAGER, PROUD } from 'src/app/core/constants/emotions-wheel.constant';
import { EmotionRecord } from 'src/app/core/models';

@Component({
  selector: 'app-view-record',
  templateUrl: './view-record.component.html',
  styleUrls: ['./view-record.component.scss']
})
export class ViewRecordComponent {
  routeUrl!: string;
  emotionRecords: EmotionRecord[] = [
    {
      emotion: EAGER,
      intensity: 0.80
    },
    {
      emotion: PROUD,
      intensity: 0.70
    },
  ];
}
