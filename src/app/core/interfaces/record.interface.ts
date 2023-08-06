import { Emotion } from './emotion.interface';

export interface Record {
  /** Brief readable identifier of record */
  title: string,
  /** Unique identifier of the record */
  id: string,
  emotions: Emotion[],
  /** Facts or context when the emotion arouse. */
  situation: string,
  /** Thoughts running in ones's mind during the situation while feeling the emotion. */
  thoughts: string,
  /** Date and time when the situation occurred. */
  date: Date
}

