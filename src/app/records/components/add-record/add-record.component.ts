import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AddRecordStep } from '../../enums/add-record-step.enum';
import { ThoughtRecordForm } from '../../models/thought-record-form.model';
import { RecordFormService } from '../../services/record-form.service';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.scss']
})
export class AddRecordComponent implements OnInit {
  readonly addRecordStep = AddRecordStep;
  formGroup!: FormGroup<ThoughtRecordForm>
  step = AddRecordStep.ADD_EMOTION;

  constructor(private formService: RecordFormService) { }

  ngOnInit(): void {
    this.formGroup = this.formService.getNew();
  }

  proceedToNextStep(nextStep: AddRecordStep): void {
    this.step = nextStep;
  }
}
