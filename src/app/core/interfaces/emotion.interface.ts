import { Emotions } from '../enums';

export interface Emotion {
  name: Emotions,
  /** Percentage number expressed in decimal form.
   * @example `intensity: 0.20` means 20%
   */
  intensity: number
}
