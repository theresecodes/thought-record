import { Emotion } from '../enums';
import { EmotionData } from '../models';
import { ANGRY, BAD, DISGUSTED, FEARFUL, HAPPY, SAD, SURPRISED } from './emotions-wheel.constant';

export const CoreEmotions: Emotion[] = [
  Emotion.HAPPY,
  Emotion.BAD,
  Emotion.DISGUSTED,
  Emotion.ANGRY,
  Emotion.FEARFUL,
  Emotion.SURPRISED,
  Emotion.SAD
];

export const CoreEmotionsData: EmotionData[] = [
  HAPPY, BAD, DISGUSTED, ANGRY, FEARFUL, SURPRISED, SAD
]