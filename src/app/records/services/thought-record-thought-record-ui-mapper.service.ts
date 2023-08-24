import { Injectable } from '@angular/core';
import { CoreEmotions } from 'src/app/core/constants/core-emotions.constant';
import { Emotion } from 'src/app/core/enums';
import { ThoughtRecord } from 'src/app/core/models';
import { CoreEmotionsType } from 'src/app/core/models/core-emotions.type';
import { EmotionRecord } from 'src/app/core/models/emotion-record.interface';
import { EmotionUI } from 'src/app/core/models/emotion-ui.interface';
import { ThoughtRecordUi } from 'src/app/core/models/thought-record-ui.interface';

import { EmotionUiDetails } from '../models/emotion-ui-details.model';

@Injectable({
  providedIn: 'root'
})
export class ThoughtRecordThoughtRecordUiMapperService {

  /**
   * Converts ThoughtRecord to ThoughtRecordUi to be used in @see RecordCardComponent.
   * @param thoughtRecord ThoughtTRecord object 
   * @returns ThoughtRecordUi
   */
  getThoughtRecordUi(thoughtRecord: ThoughtRecord): ThoughtRecordUi {
    const { emotionsUi, hiddenEmotions } = this.getEmotionDetails(thoughtRecord.emotionRecords, thoughtRecord.title)

    return {
      title: thoughtRecord.title,
      id: thoughtRecord.id,
      emotionsUi,
      hiddenEmotions
    }
  }

  /**
   * Determines the emotions for display and emotions to be hidden.
   * @param emotionRecords emotion record associated to the thought record
   * @param title title of the thought record
   * @returns 
   */
  private getEmotionDetails(emotionRecords: EmotionRecord[], title: string): EmotionUiDetails {
    const emotionsForDisplay: EmotionUI[] = [];
    let hiddenEmotions = '';

    const emotionsSortedByIntensity = this.sortByIntensity(emotionRecords);
    /** 
     * The following algorithm approximates what emotions to be shown
     * and what will be hidden based on character distance.
     * 
     * Space between chips, padding left and right are treated as 1 character distance.
     */
    const allowableCharacterDistance = title?.length <= 18 ? 29 : 15;
    let startingCharacterDistance = 1;

    emotionsSortedByIntensity.forEach((emotionRecord) => {
      const nameLength = emotionRecord.emotion.name.length;
      const endingPaddingAndSpace = 2;
      const computedAfterCharDistance = startingCharacterDistance + nameLength + endingPaddingAndSpace;

      if (computedAfterCharDistance < allowableCharacterDistance) {
        startingCharacterDistance = startingCharacterDistance + nameLength + endingPaddingAndSpace;
        const emotionUi = {
          displayName: emotionRecord.emotion.name ?? '',
          id: emotionRecord.emotion.id.toString(),
          coreGroup: this.getCoreGroup(emotionRecord.emotion.groups),
        }
        emotionsForDisplay.push(emotionUi);
      } else {
        const comma = hiddenEmotions.length ? ', ' : '';
        hiddenEmotions = hiddenEmotions.concat(`${comma}${emotionRecord.emotion.name}`);
      }
    });

    // If not all emotions can be shown or display, add another chip to indicate
    // there are more emotions that are not shown
    if (emotionsForDisplay.length !== emotionRecords.length) {
      const emotionNumber: EmotionUI = {
        id: 'and-more',
        displayName: `+${(emotionRecords.length - emotionsForDisplay.length)}`,
        coreGroup: undefined
      }
      emotionsForDisplay.push(emotionNumber);
    }

    return { emotionsUi: emotionsForDisplay, hiddenEmotions };
  }

  private sortByIntensity(emotionRecords: EmotionRecord[]): EmotionRecord[] {
    return [...emotionRecords]?.sort((a, b) => a.intensity - b.intensity).reverse()
  }

  /**
   * Gets the first emotion that belongs to the core emotions group.
   * @param emotionRecords array of emotion
   * @returns one of the group group emotion @see CoreEmotions
   */
  private getCoreGroup(emotionRecords: Emotion[]): CoreEmotionsType {
    return emotionRecords.find(emotion => CoreEmotions.includes(emotion)) as CoreEmotionsType;
  }
}
