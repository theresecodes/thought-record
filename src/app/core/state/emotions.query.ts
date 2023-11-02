import { Injectable } from '@angular/core';

import { CoreEmotionsData } from '../constants/core-emotions.constant';
import { EMOTION_WHEEL } from '../constants/emotions-wheel.constant';
import { Specificity } from '../enums';
import { CoreEmotionsType, EmotionData } from '../models';

@Injectable({
  providedIn: 'root'
})
export class EmotionsQuery {

  getCoreEmotionData(emotion: CoreEmotionsType): EmotionData {
    return CoreEmotionsData.find(emotionData => emotionData.name === emotion) as EmotionData;
  }

  getSpecificEmotionsByCore(coreEmotion: CoreEmotionsType): EmotionData[] {
    return EMOTION_WHEEL
      .filter(emotion => emotion.groups.includes(coreEmotion) && emotion.specificity === Specificity.SPECIFIC);
  }

  getFineGrainedEmotion(specificEmotion: EmotionData, coreEmotion: CoreEmotionsType): EmotionData[] {
    return EMOTION_WHEEL
      .filter(emotion => emotion.groups.includes(specificEmotion.name) && emotion.groups.includes(coreEmotion) && emotion.specificity === Specificity.FINE_GRAINED)
  }
}
