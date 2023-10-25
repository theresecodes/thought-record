import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ThoughtRecordForm } from '../../models/thought-record-form.model';
import { RecordFormService } from '../../services/record-form.service';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.scss']
})
export class AddRecordComponent implements OnInit {
  formGroup!: FormGroup<ThoughtRecordForm>

  constructor(private formService: RecordFormService) { }

  ngOnInit(): void {
    this.formGroup = this.formService.getNew();
  }
}
