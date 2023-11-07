import { Component, EventEmitter, Output } from '@angular/core';
import { Emotion } from 'src/app/core/enums';
import { CoreEmotionsType, EmotionData } from 'src/app/core/models';
import { EmotionsQuery } from 'src/app/core/state/emotions.query';

import { CoreEmotionsData } from '../../../core/constants/core-emotions.constant';
import { AddEmotionHeadlineText } from '../../constants/add-emotion-headline-text.constant';
import { AddEmotionStep } from '../../enums/add-emotion-step.enum';
import { AddRecordStep } from '../../enums/add-record-step.enum';
import { AddRecordStepComponent } from '../../models/add-record-step-component.model';
import { Options } from './options.model';
import { Selected } from './selected.model';

@Component({
  selector: 'app-add-emotions',
  templateUrl: './add-emotions.component.html',
  styleUrls: ['./add-emotions.component.scss']
})
export class AddEmotionsComponent implements AddRecordStepComponent {
  readonly addEmotionStep = AddEmotionStep;
  readonly addEmotionHeadlineText = AddEmotionHeadlineText;
  step = AddEmotionStep.SELECT_CORE;
  options: Options = {
    core: CoreEmotionsData,
    specific: [],
    fineGrained: []
  };
  selected: Selected = {
    core: null,
    specific: null,
    fineGrained: null
  };
  @Output() done: EventEmitter<AddRecordStep> = new EventEmitter();


  constructor(private emotionsQuery: EmotionsQuery) { }

  get identifiedEmotion(): Emotion {
    const { fineGrained, specific, core } = this.selected;
    return fineGrained?.name ?? specific?.name ?? core?.name ?? Emotion.HAPPY;
  }

  proceedToNextAddEmotionStep(nextStep: AddEmotionStep, data?: unknown) {
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
      case AddEmotionStep.EXIT:
        this.proceedToNextStep();
        break;
    }
  }

  proceedToNextStep() {
    this.done.emit(AddRecordStep.ADD_EMOTION);
  }

  private handleSelectSpecific(emotion: CoreEmotionsType) {
    this.selected.core = this.emotionsQuery.getCoreEmotionData(emotion);
    this.step = AddEmotionStep.SELECT_SPECIFIC;
    this.options.specific = this.emotionsQuery.getSpecificEmotionsByCore(emotion);
  }

  private handleSelectFineGrained(emotion: EmotionData) {
    this.selected.specific = emotion;
    this.options.fineGrained = this.emotionsQuery.getFineGrainedEmotion(emotion, this.selected.core!.name as CoreEmotionsType);
    this.step = AddEmotionStep.SELECT_FINE_GRAINED;
  }

  private handleIntensityRating(emotion: EmotionData) {
    this.step = AddEmotionStep.RATE;
    this.selected.fineGrained = emotion;
  }

  private handleAddMoreEmotion() {
    this.step = AddEmotionStep.ADD_MORE_EMOTION;
  }

}
