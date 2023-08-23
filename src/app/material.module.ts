import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
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
  ],
  exports: [
    MatCardModule,
    MatChipsModule,
    MatTooltipModule,
  ]
})
export class MaterialModule { }
