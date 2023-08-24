import { EmotionUI } from './emotion-ui.interface';

export interface ThoughtRecordUi {
  /** Brief readable identifier of record */
  title: string,
  /** Unique identifier of the record */
  id: string,
  /**
   * Emotions associated with the thought record
   * shown completely in @see RecordCardComponent
   */
  emotionsUi: EmotionUI[],
  /**
   * Emotions associated with the thought record but
   * are not shown in @see RecordCardComponent completely due to
   * space consideration.
   * 
   * Comma separated.
   */
  hiddenEmotions: string
}