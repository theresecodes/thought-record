import { Component, EventEmitter, Output } from '@angular/core';

import { AddRecordStep } from '../../enums/add-record-step.enum';
import { AddRecordStepComponent } from '../../models/add-record-step-component.model';

@Component({
  selector: 'app-add-title',
  templateUrl: './add-title.component.html',
  styleUrls: ['./add-title.component.scss']
})
export class AddTitleComponent implements AddRecordStepComponent {
  @Output() done: EventEmitter<AddRecordStep> = new EventEmitter;

  proceedToNextStep() {
    this.done.emit(AddRecordStep.EXIT);
  }

}
