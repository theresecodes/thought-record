import { EventEmitter } from '@angular/core';

import { AddRecordStep } from '../enums/add-record-step.enum';

export interface AddRecordStepComponent {
  done: EventEmitter<AddRecordStep>,
  proceedToNextStep: () => void
}