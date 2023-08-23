import { Component, Input, OnInit } from '@angular/core';
import { ThoughtRecord } from 'src/app/core/models';
import { ThoughtRecordUi } from 'src/app/core/models/thought-record-ui.interface';

import { ThoughtRecordThoughtRecordUiMapperService } from '../services/thought-record-thought-record-ui-mapper.service';


@Component({
  selector: 'app-record-card',
  templateUrl: './record-card.component.html',
  styleUrls: ['./record-card.component.scss']
})
export class RecordCardComponent implements OnInit {
  @Input({ required: true }) thoughtRecord!: ThoughtRecord;
  thoughtRecordUi!: ThoughtRecordUi;

  constructor(private mapperService: ThoughtRecordThoughtRecordUiMapperService) { }

  ngOnInit(): void {
    this.thoughtRecordUi = this.mapperService.getThoughtRecordUi(this.thoughtRecord)
  }

}
