import { Component } from '@angular/core';
import { CoreEmotionsType, EmotionData } from 'src/app/core/models';
import { EmotionsQuery } from 'src/app/core/state/emotions.query';

import { CoreEmotionsData } from '../../../core/constants/core-emotions.constant';
import { AddEmotionHeadlineText } from '../../constants/add-emotion-headline-text.constant';
import { AddEmotionStep } from '../../enums/add-emotion-step.enum';

@Component({
  selector: 'app-add-emotions',
  templateUrl: './add-emotions.component.html',
  styleUrls: ['./add-emotions.component.scss']
})
export class AddEmotionsComponent {
  readonly addEmotionStep = AddEmotionStep;
  readonly coreEmotions = CoreEmotionsData;
  readonly addEmotionHeadlineText = AddEmotionHeadlineText;
  step = AddEmotionStep.SELECT_CORE;
  selectedCore!: EmotionData;
  specificEmotions!: EmotionData[];
  specificEmotion!: EmotionData;
  fineGrainedEmotions!: EmotionData[];
  fineGrainedEmotion!: EmotionData;


  constructor(private emotionsQuery: EmotionsQuery) { }

  get identifiedEmotion(): string {
    return this.fineGrainedEmotion?.name ?? this.specificEmotion?.name ?? this.selectedCore;
  }

  proceedToNextStep(nextStep: AddEmotionStep, data?: unknown) {
    switch (nextStep) {
      case AddEmotionStep.SELECT_CORE:
        this.step = nextStep;
        break;
      case AddEmotionStep.SELECT_SPECIFIC: {
        const emotion = (data as EmotionData).name as CoreEmotionsType;
        this.handleSelectSpecific(emotion);
        break;
      }
      case AddEmotionStep.SELECT_FINE_GRAINED:
        this.handleSelectFineGrained(data as EmotionData);
        break;
      case AddEmotionStep.RATE:
        this.handleIntensityRating(data as EmotionData);
        break;
      case AddEmotionStep.ADD_MORE_EMOTION:
        this.handleAddMoreEmotion();
        break;
      case AddEmotionStep.DONE_ADDING_EMOTION:
        this.step = AddEmotionStep.DONE_ADDING_EMOTION;
        break;
    }
  }

  private handleSelectSpecific(emotion: CoreEmotionsType) {
    this.selectedCore = this.emotionsQuery.getCoreEmotionData(emotion);
    this.step = AddEmotionStep.SELECT_SPECIFIC;
    this.specificEmotions = this.emotionsQuery.getSpecificEmotionsByCore(emotion);
  }

  private handleSelectFineGrained(emotion: EmotionData) {
    this.specificEmotion = emotion;
    this.fineGrainedEmotions = this.emotionsQuery.getFineGrainedEmotion(emotion, this.selectedCore.name as CoreEmotionsType);
    this.step = AddEmotionStep.SELECT_FINE_GRAINED;
  }

  private handleIntensityRating(emotion: EmotionData) {
    this.step = AddEmotionStep.RATE;
    this.fineGrainedEmotion = emotion;
  }

  private handleAddMoreEmotion() {
    this.step = AddEmotionStep.ADD_MORE_EMOTION;
  }

}
