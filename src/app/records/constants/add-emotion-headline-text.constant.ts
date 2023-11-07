import { AddEmotionStep } from '../enums/add-emotion-step.enum';

export const AddEmotionHeadlineText = {
  [AddEmotionStep.SELECT_CORE]: 'What are you feeling?',
  [AddEmotionStep.SELECT_SPECIFIC]: ' Do you want to make it more specific?',
  [AddEmotionStep.SELECT_FINE_GRAINED]: 'Do you want to make it more precise?',
  [AddEmotionStep.RATE]: (emotion: string) => `Try to rate how ${emotion} you feel?`,
  [AddEmotionStep.ADD_MORE_EMOTION]: 'Do you want to add other emotion?',
  [AddEmotionStep.DONE_ADDING_EMOTION]: 'Proceed to next step with these:'
}