import { Emotion } from './emotion.interface';


export interface EmotionRecord {
  emotion: Emotion,
  /** 
   * Percentage number expressed in decimal form.
   * @example `intensity: 0.20` means 20%
   */
  intensity: number
}