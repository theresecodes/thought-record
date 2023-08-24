import { EmotionData } from './emotion-data.interface';


export interface EmotionRecord {
  emotion: EmotionData,
  /** 
   * Percentage number expressed in decimal form.
   * @example `intensity: 0.20` means 20%
   */
  intensity: number
}