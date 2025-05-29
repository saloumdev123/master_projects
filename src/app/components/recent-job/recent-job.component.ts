import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Job } from '../../interfaces/job';
import { JobService } from '../../services/job.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recent-job',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recent-job.component.html',
  styleUrls: ['./recent-job.component.css']
})
export class RecentJobComponent implements OnInit {

recentJobs: Job[] = [];

  currentPage: number = 0;
  pageSize: number = 10;
  totalPages: number = 0;

  constructor(private jobService: JobService,private router: Router,private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadJobs(this.currentPage, this.pageSize);
  }

  loadJobs(page: number, size: number): void {
    this.jobService.getJobs(page, size).subscribe(response => {
      this.recentJobs = response.content.map(job => ({
        ...job,
        timeAgo: this.getTimeAgo(job.datePosted),
        bookmarked: false, 
        showDetails : false,
        companyLogoUrl: 'assets/images/default_company.png',
        logoBgColor: '#f0f0f0',
        logoIcon: 'fas fa-building',
        logoIconColor: '#00796b',
        categoryIcon: 'fas fa-briefcase',
        typeIcon: 'far fa-clock'
      }));
      this.totalPages = response.totalPages;
      this.currentPage = response.number;
    });
  }

  getTimeAgo(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();

    const diffMinutes = Math.floor(diffMs / 60000);
    if (diffMinutes < 60) return `${diffMinutes} min ago`;

    const diffHours = Math.floor(diffMinutes / 60);
    if (diffHours < 24) return `${diffHours} h ago`;

    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays} j ago`;
  }

  toggleBookmark(job: Job): void {
    job.bookmarked = !job.bookmarked;
  }

  nextPage(): void {
    if (this.currentPage + 1 < this.totalPages) {
      this.currentPage++;
      this.loadJobs(this.currentPage, this.pageSize);
    }
  }

  prevPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadJobs(this.currentPage, this.pageSize);
    }
  }

  toggleDetails(job: Job): void {
    console.log('toggleDetails called for job id:', job.id);
    this.recentJobs = this.recentJobs.map(j => 
    j.id === job.id ? {...j, showDetails: !j.showDetails} : j
  );
  this.cdr.detectChanges();
}
navigateToJobApplication(job: any) {
  this.router.navigate(['/job-applications'], { queryParams: { jobId: job.id } });

}

}