import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../job-service.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
})
export class JobDetailsComponent implements OnInit {
  job: any;

  constructor(private route: ActivatedRoute, private jobService: JobService) { }

  ngOnInit(): void {
    const jobIdString = this.route.snapshot.paramMap.get('jobId');
    if (jobIdString) {
      const jobId = parseInt(jobIdString);
      this.jobService.getJob(jobId).subscribe(job => {
        this.job = job;
      });
    }
  }
}
