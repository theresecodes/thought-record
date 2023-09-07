import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecordsPageComponent } from './records/components/records-page/records-page.component';

const routes: Routes = [
  {
    path: '',
    component: RecordsPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'records',
        pathMatch: 'full'
      },
      {
        path: 'records',
        loadChildren: () => import('../app/records/records.module').then((m) => m.RecordsModule)
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }