import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { JobService } from '../../services/job.service';
import { Job } from '../../interfaces/job';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';

@Component({
  selector: 'app-recent-job',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './recent-job.component.html',
  styleUrls: ['./recent-job.component.css']
})
export class RecentJobComponent implements OnInit {

  recentJobs: Job[] = [];
  currentPage: number = 0;
  pageSize: number = 5;
  totalPages: number = 0;

  constructor(
    private jobService: JobService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadJobs(this.currentPage, this.pageSize);
  }

  loadJobs(page: number, size: number): void {
    this.jobService.getJobs(page, size).subscribe(response => {
      this.recentJobs = response.content.map(job => ({
        ...job,
        timeAgo: this.getTimeAgo(job.datePosted),
        bookmarked: false,
        companyLogoUrl: job.companyLogoUrl || 'assets/images/default_company.png',
        categoryIcon: 'fas fa-briefcase',
        typeIcon: 'far fa-clock'
      }));
      this.totalPages = response.totalPages;
      this.currentPage = response.number;
      this.cdr.markForCheck();
    });
  }

  toggleBookmark(job: Job): void {
    job.bookmarked = !job.bookmarked;
  }

  viewJobDetails(job: Job): void {
    this.router.navigate(['/job-details', job.id]);
  }

  nextPage(): void {
    if (this.currentPage + 1 < this.totalPages) {
      this.loadJobs(this.currentPage + 1, this.pageSize);
    }
  }

  previousPage(): void {
    if (this.currentPage > 0) {
      this.loadJobs(this.currentPage - 1, this.pageSize);
    }
  }

  getTimeAgo(dateString: string): string {
    if (!dateString) return '';
    try {
      const date = parseISO(dateString);
      return formatDistanceToNow(date, { addSuffix: true, locale: fr });
    } catch {
      return '';
    }
  }
}
