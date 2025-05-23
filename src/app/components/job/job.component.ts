import { Component, inject, OnInit } from '@angular/core';
import { Job } from '../../interfaces/job';
import { JobService } from '../../services/job.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [HttpClientModule, FormsModule, ReactiveFormsModule],
  templateUrl: './job.component.html',
  styleUrl: './job.component.css'
})
export class JobComponent implements OnInit {
  jobService = inject(JobService);
  router = inject(Router)
  jobs: Job[] = [];
  selectedJob?: Job;

  filterTerm: string = '';
  filterType: string = 'title';

  currentPage: number = 0;
  totalPages: number = 1;
  pageSize: number = 5; 

  constructor() {}

  ngOnInit(): void {
    this.loadJobs();
  }

  loadJobs(): void {
    this.jobService.getJobs(this.currentPage, this.pageSize).subscribe((data) => {
      console.log('Loaded jobs:', data);
      this.jobs = data.content;
      this.totalPages = data.totalPages;
    });
  }

  loadJobById(id: number): void {
    this.jobService.getJobById(id).subscribe((job) => {
      this.selectedJob = job;
    });
  }

  get filteredJobs(): Job[] {
    if (!this.filterTerm) {
      return this.jobs;
    }
    return this.jobs.filter((job) =>
      job[this.filterType as keyof Job]?.toString().toLowerCase().includes(this.filterTerm.toLowerCase())
    );
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.loadJobs();
    }
  }

  previousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadJobs();
    }
  }
  apply(jobId: number): void {
    this.router.navigate(['/job-applications'], { queryParams: { jobId: jobId } });
  }
}
