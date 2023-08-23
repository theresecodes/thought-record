import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EmotionBgDirective } from './emotion-bg.directive';
import { TextOverflowPipe } from './text-overflow.pipe';



@NgModule({
  declarations: [
    TextOverflowPipe,
    EmotionBgDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [TextOverflowPipe, EmotionBgDirective]
})
export class SharedModule { }
