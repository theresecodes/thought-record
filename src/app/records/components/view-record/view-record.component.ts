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
  situation = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto deleniti rem distinctio, numquam impedit tempore, dolore nobis omnis accusantium beatae soluta. Magnam molestiae nihil repudiandae maxime facilis delectus est id.';
}
