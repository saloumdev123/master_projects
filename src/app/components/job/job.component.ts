import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { JobService } from '../../services/job.service';
import { Job } from '../../interfaces/job';
import { Category } from '../../interfaces/category';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
  ],
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  favoriteJobIds: Set<number> = new Set<number>();

keyword: string = '';
selectedCategories: string[] = [];
selectedJobTypes: string[] = [];
selectedExperienceLevels: number[] = [];
selectedDates: string[] = [];
minSalary: number = 0;
maxSalary: number = 1000000;
selectedLocation: string = '';
showLocationDropdown: boolean = false;
 isMenuOpen: boolean = false;
senegaleseCities: string[] = ['Dakar', 'Thiès', 'Saint-Louis', 'Ziguinchor'];
categories: Category[] = []; 
jobTypes: any[] = [];
experienceLevels: any[] = [];
datePostedOptions: any[] = [];

 allJobs: Job[] = [];
 filteredJobs: Job[] = [];

 jobs: Job[] = [];
  currentPage: number = 0;
  pageSize: number = 5;
  totalPages: number = 0;

  constructor(
    private jobService: JobService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadJobs(this.currentPage, this.pageSize);
  }
  
onCategoryChange(event: any, categoryName: string): void {
  if (event.target.checked) {
    this.selectedCategories.push(categoryName);
  } else {
    this.selectedCategories = this.selectedCategories.filter(c => c !== categoryName);
  }
  this.applyFilters();
}
onJobTypeChange(event: any, jobTypeName: string): void {
  if (event.target.checked) {
    this.selectedJobTypes.push(jobTypeName);
  } else {
    this.selectedJobTypes = this.selectedJobTypes.filter(t => t !== jobTypeName);
  }
  this.applyFilters();
}

 loadJobs(page: number, size: number): void {
  this.jobService.getJobs(page, size).subscribe({
    next: (data) => {
      this.allJobs = data.content;
      this.filteredJobs = [...this.allJobs]; // Copie pour filtrage
      this.totalPages = data.totalPages;
      this.currentPage = data.number;
       this.filterJobs();
    },
    error: (err) => {
      console.error('Erreur lors du chargement des jobs', err);
    }
  });
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
  goToJobDetails(jobId: number): void {
    this.router.navigate(['/jobs', jobId]);
  }

  selectLocation(city: string): void {
  this.selectedLocation = city;
  this.showLocationDropdown = false;
}
onLocationInputBlur(): void {
  setTimeout(() => {
    this.showLocationDropdown = false;
  }, 200);
}

  applyFilters(): void {
  this.filteredJobs = this.allJobs.filter(job => {
    const matchesKeyword =
      !this.keyword ||
      job.title?.toLowerCase().includes(this.keyword.toLowerCase()) ||
      job.recruiterCompanyName?.toLowerCase().includes(this.keyword.toLowerCase());

   const matchesLocation =
  !this.selectedLocation ||
  job.location?.toLowerCase().includes(this.selectedLocation.toLowerCase());

    const matchesCategory =
      this.selectedCategories.length === 0 ||
      this.selectedCategories.includes(job.categoryName);

    const matchesJobType =
      this.selectedJobTypes.length === 0 ||
      this.selectedJobTypes.includes(job.jobType);

  const matchesExperience =
  this.selectedExperienceLevels.length === 0 ||
  this.selectedExperienceLevels.includes(job.yearExperience);

    const matchesDate =
      this.selectedDates.length === 0 ||
      this.selectedDates.includes(job.datePosted);

    const matchesSalary =
  (job.pay) >= this.minSalary && (job.pay) <= this.maxSalary;

    return (
      matchesKeyword &&
      matchesLocation &&
      matchesCategory &&
      matchesJobType &&
      matchesExperience &&
      matchesDate &&
      matchesSalary
    );
  });
}
applySalaryFilter(): void {
  this.applyFilters();
}
 toggleFavorite(jobId: number): void {
    if (this.favoriteJobIds.has(jobId)) {
      this.favoriteJobIds.delete(jobId);
    } else {
      this.favoriteJobIds.add(jobId);
    }
    // Tu peux ajouter ici une logique pour sauvegarder côté backend
    // ou gérer visuellement l’état du favori
  }

  isFavorite(jobId: number): boolean {
    return this.favoriteJobIds.has(jobId);
  }
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
  filterJobs(): void {
  this.filteredJobs = this.allJobs.filter(job => {
    const matchesKeyword = this.keyword === '' || job.title.toLowerCase().includes(this.keyword.toLowerCase()) || job.recruiterCompanyName.toLowerCase().includes(this.keyword.toLowerCase());
    const matchesLocation = this.selectedLocation === '' || job.location.toLowerCase().includes(this.selectedLocation.toLowerCase());
    const matchesSalary = job.pay >= this.minSalary && job.pay <= this.maxSalary;

    return matchesKeyword && matchesLocation && matchesSalary;
  });
}

}
