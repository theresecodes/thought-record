import { Component, OnInit } from '@angular/core';
import { COURAGEOUS, FREE, HAPPY, MAD, OUT_OF_CONTROL, PLAYFUL, SAD } from 'src/app/core/constants/emotions-wheel.constant';
import { ThoughtRecord } from 'src/app/core/models';
import { EmotionRecord } from 'src/app/core/models/emotion-record.interface';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {
  thoughtRecords!: ThoughtRecord[];


  ngOnInit(): void {
    const playful: EmotionRecord = {
      emotion: PLAYFUL,
      intensity: 0.95
    }

    const free: EmotionRecord = {
      emotion: FREE,
      intensity: 0.20
    }

    const happy: EmotionRecord = {
      emotion: HAPPY,
      intensity: 0.20
    }


    const courageous: EmotionRecord = {
      emotion: COURAGEOUS,
      intensity: 0.5
    }

    const outOfControl: EmotionRecord = {
      emotion: OUT_OF_CONTROL,
      intensity: 0.7
    }

    const sad: EmotionRecord = {
      emotion: SAD,
      intensity: 0.2
    }

    const mad: EmotionRecord = {
      emotion: MAD,
      intensity: 0.2
    }

    this.thoughtRecords = [
      {
        title: 'try title',
        id: '121232',
        emotionRecords: [playful, free, courageous, outOfControl],
        date: new Date(),
        situation: 'jdkfjdkfdf',
        thoughts: 'jdkfjdkfj'
      },
      {
        title: 'Consistent working on small bet by going to Starbucks every morning.',
        id: '232323',
        emotionRecords: [sad, sad, mad],
        date: new Date(),
        situation: 'jdkfjdkfdf',
        thoughts: 'jdkfjdkfj'
      },
      {
        title: 'ale fdjkeos the  quick brown fox jump over the lazy dog',
        id: '2452',
        emotionRecords: [free, outOfControl, sad, mad],
        date: new Date(),
        situation: 'jdkfjdkfdf',
        thoughts: 'jdkfjdkfj'
      },
      {
        title: 'klaejf ',
        id: '2134',
        emotionRecords: [playful],
        date: new Date(),
        situation: 'jdkfjdkfdf',
        thoughts: 'jdkfjdkfj'
      },
      {
        title: 'aeos ere',
        id: '5421',
        emotionRecords: [courageous, playful, happy],
        date: new Date(),
        situation: 'jdkfjdkfdf',
        thoughts: 'jdkfjdkfj'
      },
      {
        title: 'kldfafdf df ',
        id: '9234',
        emotionRecords: [playful],
        date: new Date(),
        situation: 'jdkfjdkfdf',
        thoughts: 'jdkfjdkfj'
      },
      {
        title: 'er qerer',
        id: '9421',
        emotionRecords: [courageous, playful],
        date: new Date(),
        situation: 'jdkfjdkfdf',
        thoughts: 'jdkfjdkfj'
      },
      {
        title: 'kldfa jdskjfk df ',
        id: '9114',
        emotionRecords: [playful, free],
        date: new Date(),
        situation: 'jdkfjdkfdf',
        thoughts: 'jdkfjdkfj'
      },
      {
        title: 'er qerer',
        id: '8521',
        emotionRecords: [courageous, playful],
        date: new Date(),
        situation: 'jdkfjdkfdf',
        thoughts: 'jdkfjdkfj'
      },
      {
        title: 'kldskjfk df ',
        id: '9014',
        emotionRecords: [playful, free],
        date: new Date(),
        situation: 'jdkfjdkfdf',
        thoughts: 'jdkfjdkfj'
      },
      {
        title: 'llajdfk ajkdf',
        id: '7671',
        emotionRecords: [courageous, playful],
        date: new Date(),
        situation: 'jdkfjdkfdf',
        thoughts: 'jdkfjdkfj'
      },
      {
        title: 'pladye ff',
        id: '7814',
        emotionRecords: [playful, free],
        date: new Date(),
        situation: 'jdkfjdkfdf',
        thoughts: 'jdkfjdkfj'
      }
    ]
  }
}
