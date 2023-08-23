import { Component, Input, OnInit } from '@angular/core';
import { ThoughtRecord } from 'src/app/core/models';
import { ThoughtRecordUi } from 'src/app/core/models/thought-record-ui.interface';

import { ThoughtRecordThoughtRecordUiMapperService } from '../services/thought-record-thought-record-ui-mapper.service';
import { RECORD_CARD_TITLE } from './record-card-title.constant';


@Component({
  selector: 'app-record-card',
  templateUrl: './record-card.component.html',
  styleUrls: ['./record-card.component.scss']
})
export class RecordCardComponent implements OnInit {
  @Input({ required: true }) thoughtRecord!: ThoughtRecord;
  thoughtRecordUi!: ThoughtRecordUi;
  readonly RECORD_CARD_TITLE = RECORD_CARD_TITLE;

  constructor(private mapperService: ThoughtRecordThoughtRecordUiMapperService) { }

  ngOnInit(): void {
    this.thoughtRecordUi = this.mapperService.getThoughtRecordUi(this.thoughtRecord)
  }

}
