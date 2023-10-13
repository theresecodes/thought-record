import { Component } from '@angular/core';

import { Features } from './core/constants/features.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Thought Record App';
  readonly features = Features;
}
