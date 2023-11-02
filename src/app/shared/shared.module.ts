import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material.module';
import { EmotionBgDirective } from './directives/emotion-bg.directive';
import { ResolveAppHeaderDisplayDirective } from './directives/resolve-app-header-display.directive';
import { ResolveBodyDisplayDirective } from './directives/resolve-body-display.directive';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import { TextOverflowPipe } from './text-overflow.pipe';



@NgModule({
  declarations: [
    TextOverflowPipe,
    EmotionBgDirective,
    InfoDialogComponent,
    ResolveAppHeaderDisplayDirective,
    ResolveBodyDisplayDirective
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [TextOverflowPipe, EmotionBgDirective, InfoDialogComponent, ResolveAppHeaderDisplayDirective, ResolveBodyDisplayDirective]
})
export class SharedModule { }
