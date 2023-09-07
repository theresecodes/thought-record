import { Pipe, PipeTransform } from '@angular/core';
import { Emotion } from 'src/app/core/enums';
import { CoreEmotionsType } from 'src/app/core/models';

import { isEmptyArray } from '../utils';
import { getCoreGroup } from '../utils/get-core-group.util';

@Pipe({
  name: 'coreEmotion'
})
export class CoreEmotionPipe implements PipeTransform {

  /**
   * Determines the core emotion among a list of emotions.
   * 
   * @param emotions list of emotions. @see EmotionData.groups
   * @returns one of the @see CoreEmotionsType
   */
  transform<T extends Emotion>(emotions: Array<T>): CoreEmotionsType | ' ' {
    if (isEmptyArray(emotions)) return ' ';
    return getCoreGroup(emotions) ?? ' ';
  }

}
