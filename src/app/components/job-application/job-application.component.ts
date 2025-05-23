import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Job } from '../../interfaces/job';
import { JobService } from '../../services/job.service';
import { JobApplicationStatus } from '../../enums/JobApplicationStatus';

@Component({
  selector: 'app-job-application',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, TranslateModule],
  templateUrl: './job-application.component.html',
  styleUrl: './job-application.component.css',
})
export class JobApplicationComponent implements OnInit {
  resumeFile: File | null = null;
  jobAppForm: FormGroup;
  selectedJob: Job | null = null;

  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private jobService = inject(JobService);
  private http = inject(HttpClient); // Pour l'appel direct

  constructor() {
    this.jobAppForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      country: ['', Validators.required],
      city: ['', Validators.required],
      phone: ['', Validators.required],
      jobId: [null, Validators.required],
      jobTitle: ['', Validators.required],
      jobDescription: ['', Validators.required],
      jobApplicationStatus: [JobApplicationStatus.SUCCESS],
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const jobId = +params['jobId'];
      if (jobId) {
        this.jobAppForm.patchValue({ jobId });

        this.jobService.getJobById(jobId).subscribe((job: Job) => {
          if (job) {
            this.selectedJob = job;
            this.jobAppForm.patchValue({
              jobTitle: job.title,
              jobDescription: job.description,
            });
          }
        });
      }
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.resumeFile = input.files[0];
    }
  }

  apply(): void {
    if (this.jobAppForm.valid && this.resumeFile) {
      const formData = new FormData();
      Object.keys(this.jobAppForm.controls).forEach(key => {
        const value = this.jobAppForm.get(key)?.value;
        formData.append(key, value);
      });
      formData.append('resume', this.resumeFile);

      this.http.post('http://localhost:8080/api/job-applications/apply', formData).subscribe({
        next: () => {
          console.log('Application submitted successfully');
          this.router.navigate(['/apply-success']);
        },
        error: error => console.error('Error when applying to this job:', error),
      });
    } else {
      this.jobAppForm.markAllAsTouched();
    }
  }
}
