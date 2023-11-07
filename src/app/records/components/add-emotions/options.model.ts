import { EmotionData } from 'src/app/core/models';

export interface Options {
  core: EmotionData[],
  specific: EmotionData[],
  fineGrained: EmotionData[]
}