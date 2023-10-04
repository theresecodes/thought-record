import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThoughtRecord } from 'src/app/core/models';
import { ThoughtRecordsQuery } from 'src/app/core/state/thought-records/thought-records.query';

@Component({
  selector: 'app-view-record',
  templateUrl: './view-record.component.html',
  styleUrls: ['./view-record.component.scss']
})
export class ViewRecordComponent implements OnInit {
  thoughtRecord!: ThoughtRecord;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private thoughtRecordQuery: ThoughtRecordsQuery) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const id = params.get('id') as string;
      this.thoughtRecord = this.thoughtRecordQuery.getById(id);
    });

  }

  goToMainPage() {
    this.router.navigateByUrl('/records');
  }
}
