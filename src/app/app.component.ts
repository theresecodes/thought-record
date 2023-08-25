import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { InfoDialogComponent } from './shared/info-dialog/info-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Thought Record App';
  features = ['Add New Record', 'Graph', 'Export'];

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    this.dialog.open(InfoDialogComponent)
  }

}
