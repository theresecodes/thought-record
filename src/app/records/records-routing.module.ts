import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecordsComponent } from './components/records/records.component';
import { ViewRecordComponent } from './components/view-record/view-record.component';

const routes: Routes = [
  {
    path: '',
    component: RecordsComponent,
  },
  {
    path: 'records/:id',
    component: ViewRecordComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecordsRoutingModule { }