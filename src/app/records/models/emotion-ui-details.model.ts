import { EmotionUI } from 'src/app/core/models/emotion-ui.interface';

/**
 * Used in @see RecordCardComponent.
 */
export interface EmotionUiDetails {
  /** Emotions to be shown in record card. */
  emotionsUi: EmotionUI[],
  /** 
   * Emotions associated with thought record 
   * but are shown as +1 or +2 if no longer
   * fits in the display space.
   */
  hiddenEmotions: string
}