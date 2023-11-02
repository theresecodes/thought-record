import { Component, EventEmitter, Output } from '@angular/core';

import { AddRecordStep } from '../../enums/add-record-step.enum';
import { AddRecordStepComponent } from '../../models/add-record-step-component.model';

@Component({
  selector: 'app-add-thoughts',
  templateUrl: './add-thoughts.component.html',
  styleUrls: ['./add-thoughts.component.scss']
})
export class AddThoughtsComponent implements AddRecordStepComponent {
  @Output() done: EventEmitter<AddRecordStep> = new EventEmitter();

  proceedToNextStep() {
    this.done.emit(AddRecordStep.ADD_TITLE);
  }
}
