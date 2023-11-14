import { Emotion } from '../../core/enums';
import { getCoreGroup } from './get-core-group.util';

describe('getCoreGroupUtil', () => {
  it('should return `HAPPY` when specific emotion is under HAPPY grouping', () => {

    const emotionGroup = [Emotion.HAPPY, Emotion.POWERFUL]

    const coreEmotion = getCoreGroup(emotionGroup)

    expect(coreEmotion).toBe(Emotion.HAPPY);
  });

  it('should return `undefined` when array argument does not have a core emotion', () => {
    const emotionGroupWithoutCoreEmotion = [Emotion.AGGRESSIVE, Emotion.AWE];

    const coreEmotion = getCoreGroup(emotionGroupWithoutCoreEmotion);

    expect(coreEmotion).toBe(undefined);
  });

});