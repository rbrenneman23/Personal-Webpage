import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private jobs = [
    {
      id: 1,
      title: "Operator II",
      description: "I am currently an operator for a biopharmaceutical company, where I keep equipment cleaned, prepare equipment loads to be filled with medicine, and test filters for integrity before and after use. I also assist coworkers with solving problems, and ensuring that processes are correctly performed in a timely manner.",
      duration: "6 months",
      employer: "Simtra"
    },
    {
      id: 2,
      title: "Personal Banker",
      description: "As a banker, I was responsible for assisting customers with a wide range of things, from making deposits and withdrawals, to opening accounts and loan applications. I also answered phone calls from customers, and assisted them with the needs that they had.",
      duration: "1 year",
      employer: "Northwest Bank"
    },
    {
      id: 3,
      title: "Qualified Trainer",
      description: "While I was a trainer, I helped newly hired employees learn how to operate their machinery, assemble the product they worked on, and assist with finding solutions to problems that would arise during their training. I was also responsible for making sure that they understood the SOPs that were applicable to their role, and answering any questions that they had.",
      duration: "4 years",
      employer: "Cook Medical"
    }
  ];

  getJobs(): Observable<any[]> {
    return of(this.jobs);
  }

  getJob(id: number): Observable<any> {
    const job = this.jobs.find(job => job.id === id);
    return of(job);
  }
}
