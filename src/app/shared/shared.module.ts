import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material.module';
import { EmotionBgDirective } from './directives/emotion-bg.directive';
import { ResolveBodyDisplayDirective } from './directives/resolve-body-display.directive';
import { ResolveHeaderDisplayDirective } from './directives/resolve-header-display.directive';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import { TextOverflowPipe } from './text-overflow.pipe';



@NgModule({
  declarations: [
    TextOverflowPipe,
    EmotionBgDirective,
    InfoDialogComponent,
    ResolveHeaderDisplayDirective,
    ResolveBodyDisplayDirective
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [TextOverflowPipe, EmotionBgDirective, InfoDialogComponent, ResolveHeaderDisplayDirective, ResolveBodyDisplayDirective]
})
export class SharedModule { }
