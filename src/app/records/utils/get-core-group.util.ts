import { CoreEmotions } from 'src/app/core/constants/core-emotions.constant';
import { Emotion } from 'src/app/core/enums';
import { CoreEmotionsType } from 'src/app/core/models';

/**
 * Determines the core emotion among a list of emotions listed. @see EmotionData.group
 * @param emotionRecords an Array of emotion
 * @returns one of the @see CoreEmotionsType
 */
export const getCoreGroup = <T extends Emotion>(emotionRecords: Array<T>): CoreEmotionsType => {
  return emotionRecords.find((emotion) => CoreEmotions.includes(emotion)) as CoreEmotionsType;
}