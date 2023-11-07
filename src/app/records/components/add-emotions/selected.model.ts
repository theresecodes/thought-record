import { EmotionData } from 'src/app/core/models';

export interface Selected {
  /** Can be null when the user has not yet selected anything. */
  core: EmotionData | null,
  /** Can be null when the user has not yet selected anything. */
  specific: EmotionData | null,
  /** Can be null when the user has not yet selected anything. */
  fineGrained: EmotionData | null
}