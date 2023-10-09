import { EmotionRecord } from './emotion-record.interface';

export interface ThoughtRecord {
  /** Brief readable identifier of record */
  title: string,
  /** Unique identifier of the record */
  id: string,
  emotionRecords: EmotionRecord[],
  /** Facts or context when the emotion arouse. */
  situation: string,
  /** Thoughts running in ones's mind during the situation while feeling the emotion. */
  thoughts: string[],
  /** Date and time when the situation occurred. */
  date: Date
}

