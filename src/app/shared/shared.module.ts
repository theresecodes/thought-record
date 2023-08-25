import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '../material.module';
import { EmotionBgDirective } from './emotion-bg.directive';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import { TextOverflowPipe } from './text-overflow.pipe';



@NgModule({
  declarations: [
    TextOverflowPipe,
    EmotionBgDirective,
    InfoDialogComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  exports: [TextOverflowPipe, EmotionBgDirective, InfoDialogComponent]
})
export class SharedModule { }
