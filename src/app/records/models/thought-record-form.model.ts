import { FormArray, FormControl, FormGroup } from '@angular/forms';

export interface ThoughtRecordForm {
  id: FormControl<string>,
  title: FormControl<string>,
  emotionRecords: FormArray<FormGroup<EmotionRecordForm>>,
  situation: FormControl<string>,
  thoughts: FormArray<FormControl<string>>,
  date: FormControl<Date>
}

export interface EmotionRecordForm {
  /** id of emotion @see EmotionData */
  id: FormControl<string>,
  intensity: FormControl<number>
}