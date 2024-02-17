import { Component, OnInit } from '@angular/core';
import { JobService } from '../job-service.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent implements OnInit {
  jobs: any[] = [];

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.jobService.getJobs().subscribe(jobs => {
      this.jobs = jobs;
    })
  }
}
