import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { EmotionRecordForm, ThoughtRecordForm } from '../models/thought-record-form.model';

@Injectable({
  providedIn: 'root'
})
export class RecordFormService {

  constructor(private fb: FormBuilder) { }

  /**
   * Builds form group used to add new record.
   * @returns form group to add new record.
   */
  getNew(): FormGroup<ThoughtRecordForm> {
    return this.fb.nonNullable.group({
      id: '',
      title: '',
      emotionRecords: this.getEmotionRecordsFormArray(),
      situation: '',
      thoughts: this.getThoughtsFormArray(),
      date: new Date()
    })
  }

  private getEmotionRecordsFormArray(): FormArray<FormGroup<EmotionRecordForm>> {
    return this.fb.nonNullable.array([this.getEmotionRecordFormGroup()]);
  }

  private getEmotionRecordFormGroup(): FormGroup<EmotionRecordForm> {
    return this.fb.nonNullable.group({
      id: '',
      intensity: 0
    })
  }

  private getThoughtsFormArray(): FormArray<FormControl<string>> {
    return this.fb.nonNullable.array([this.fb.nonNullable.control('')]);
  }

}
