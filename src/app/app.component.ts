import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Features } from './core/constants/features.constant';
import { Feature } from './core/enums/feature.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Thought Record App';
  readonly features = Features;

  constructor(private router: Router) { }

  navigateTo(feature: string): void {
    switch (feature) {
      case Feature.Records:
        this.router.navigateByUrl("/records");
        break;
      case Feature.Graph:
        this.router.navigateByUrl("/graph");
        break;
      case Feature.Export:
        this.router.navigateByUrl("/export");
        break;
    }
  }
}
