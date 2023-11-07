import { Component, Input } from '@angular/core';
import { Specificity } from 'src/app/core/enums';
import { EmotionData } from 'src/app/core/models';

@Component({
  selector: 'app-emotion-card',
  templateUrl: './emotion-card.component.html',
  styleUrls: ['./emotion-card.component.scss']
})
export class EmotionCardComponent {
  @Input({ required: true }) emotion!: EmotionData;
  @Input({ required: false }) isSelected?: boolean;
  readonly specificity = Specificity;
}
