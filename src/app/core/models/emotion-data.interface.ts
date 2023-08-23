import { Emotion, Specificity } from '../enums';

export interface EmotionData {
  /**
   * Unique identifier of the emotion.
   * 
   * Note: This is needed as there are some emotions
   * that are named the same but belong to different core group.
   */
  id: number | string,
  /**
   * The emotion identified by the user in the form.
   */
  name: Emotion,
  /** 
   * Identifies which level the named emotion is
   * on the emotion wheel. The more specific the
   * higher the specificity number.
   */
  specificity: Specificity,
  /**
   * Identifies to which higher level specificity
   * scope the emotion belongs. 
   * 
   * All core emotions are group of their own.
   * @example happy has groups: [ happy ]
   */
  groups: Emotion[]
}
