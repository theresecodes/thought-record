import { Component, EventEmitter, Output } from '@angular/core';

import { AddRecordStep } from '../../enums/add-record-step.enum';
import { AddRecordStepComponent } from '../../models/add-record-step-component.model';

@Component({
  selector: 'app-add-situation',
  templateUrl: './add-situation.component.html',
  styleUrls: ['./add-situation.component.scss']
})
export class AddSituationComponent implements AddRecordStepComponent {
  @Output() done: EventEmitter<AddRecordStep> = new EventEmitter();

  proceedToNextStep() {
    this.done.emit(AddRecordStep.ADD_THOUGHTS)
  }
}
