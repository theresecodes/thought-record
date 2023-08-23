import { CoreEmotionsType } from './core-emotions.type';


export interface EmotionUI {
  /**
   * Maps to Emotion.name
   * Can also be like `+2` when emotion chips
   * are too many to show in @see RecordCardComponent
   */
  displayName: string,
  /**
   * Maps to Emotion.id
   * Can also be 'and-more' when emotion chips
   * are too many to show in @see RecordCardComponent
   */
  id: string,
  /**
   * To which core emotion the current emotion belongs to.
   * Maps to the core emotion in Emotion.groups.
   * For add-more emotions, will follow the first.
   */
  coreGroup: CoreEmotionsType | undefined,
}