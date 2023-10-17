import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

/**
 * Where all Angular Material imports are done.
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    MatTooltipModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressBarModule,
    MatIconModule
  ],
  exports: [
    MatCardModule,
    MatChipsModule,
    MatTooltipModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressBarModule,
    MatIconModule
  ]
})
export class MaterialModule { }
