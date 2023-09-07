import { Component, Input } from '@angular/core';
import { EmotionRecord } from 'src/app/core/models';

@Component({
  selector: 'app-emotion-details-chip',
  templateUrl: './emotion-details-chip.component.html',
  styleUrls: ['./emotion-details-chip.component.scss']
})
export class EmotionDetailsChipComponent {
  @Input({ required: true }) emotionRecord!: EmotionRecord;
}
