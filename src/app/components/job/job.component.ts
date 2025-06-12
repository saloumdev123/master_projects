import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { JobService } from '../../services/job.service';
import { Job } from '../../interfaces/job';
import { Category } from '../../interfaces/category';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale'; 

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
  selectedExperienceLevels: string[] = [];
  selectedDates: string[] = [];
  minSalary: number = 0;
  maxSalary: number = 1000000;
  selectedLocation: string = '';
  showLocationDropdown: boolean = false;
  isMenuOpen: boolean = false;
  senegaleseCities: string[] = ['Dakar', 'Thiès', 'Saint-Louis', 'Ziguinchor', 'Mbour', 'Touba', 'Kaolack']; 

  // Données de filtre 
  categories: Category[] = [];
  jobTypes: { name: string, count: number }[] = [];
  experienceLevels: { level: string, name: string, count: number }[] = [];
  datePostedOptions: { value: string, name: string, count: number }[] = [];

  allJobs: Job[] = []; // Tous les jobs chargés depuis le service, non filtrés
  filteredJobs: Job[] = []; // Jobs après application des filtres, avant pagination
  displayedJobs: Job[] = []; // Jobs actuellement affichés sur la page courante

  // Propriétés de pagination
  currentPage: number = 0;
  pageSize: number = 5; 
  totalPages: number = 0;
  totalElements: number = 0; 
  sortOrder: string = 'latest';
  

  constructor(
    private jobService: JobService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadJobs(this.currentPage, this.pageSize); // Charge la première page de jobs
  }

updateFilterCounts(): void {
  // Réinitialiser les counts
  this.categories.forEach(c => c.count = 0);
  this.jobTypes.forEach(jt => jt.count = 0);
  this.experienceLevels.forEach(el => el.count = 0);
  this.datePostedOptions.forEach(dpo => dpo.count = 0);

  const now = new Date();

  this.allJobs.forEach(job => {
    // Catégories
    const category = this.categories.find(c => c.name === job.categoryName);
    if (category) category.count++;

    // Types d'emploi
    const jobType = this.jobTypes.find(jt => jt.name === job.jobType);
    if (jobType) jobType.count++;

    // Niveaux d'expérience (si job.yearExperience existe)
    if (job.yearExperience === 0) {
      const level = this.experienceLevels.find(el => el.level === 'no-experience');
      if (level) level.count++;
    } else if (job.yearExperience > 0 && job.yearExperience <= 2) {
      const level = this.experienceLevels.find(el => el.level === 'entry-level');
      if (level) level.count++;
    } else if (job.yearExperience > 2 && job.yearExperience <= 5) {
      const level = this.experienceLevels.find(el => el.level === 'mid-level');
      if (level) level.count++;
    } else if (job.yearExperience > 5 && job.yearExperience <= 10) {
      const level = this.experienceLevels.find(el => el.level === 'senior-level');
      if (level) level.count++;
    } else if (job.yearExperience > 10) {
      const level = this.experienceLevels.find(el => el.level === 'director');
      if (level) level.count++;
    }

    // Dates de publication - use job.postedDate instead of fixed date
    if (!job.datePosted) return; // skip if no postedDate

    const postedDate = new Date(job.datePosted);
    const diffTime = Math.abs(now.getTime() - postedDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // convert ms to days

    if (diffDays <= 1) {
      const last24 = this.datePostedOptions.find(dpo => dpo.value === 'last24hours');
      if (last24) last24.count++;
    }
    if (diffDays <= 7) {
      const last7 = this.datePostedOptions.find(dpo => dpo.value === 'last7days');
      if (last7) last7.count++;
    }
    if (diffDays <= 30) {
      const last30 = this.datePostedOptions.find(dpo => dpo.value === 'last30days');
      if (last30) last30.count++;
    }

    // If you have an 'all' option to count all jobs regardless of date:
    const all = this.datePostedOptions.find(dpo => dpo.value === 'all');
    if (all) all.count++;
  });
}

//   updateFilterCounts(): void {
//   this.categories.forEach(c => c.count = 0);
//   this.jobTypes.forEach(jt => jt.count = 0);
//   this.experienceLevels.forEach(el => el.count = 0);
//   this.datePostedOptions.forEach(dpo => dpo.count = 0);

//   this.allJobs.forEach(job => {
//     // ➤ Catégorie
//     const category = this.categories.find(c => c.name === job.categoryName);
//     if (category) {
//       category.count++;
//     }

//     // ➤ Type d'emploi
//     const jobType = this.jobTypes.find(jt => jt.name === job.jobType);
//     if (jobType) {
//       jobType.count++;
//     }

//     // ➤ Expérience
//     const years = job.yearExperience;
//     if (years !== undefined && years !== null) {
//       let level = '';
//       if (years === 0) level = 'no-experience';
//       else if (years <= 2) level = 'entry-level';
//       else if (years <= 5) level = 'mid-level';
//       else if (years <= 10) level = 'senior-level';
//       else level = 'director';

//       const experience = this.experienceLevels.find(el => el.level === level);
//       if (experience) {
//         experience.count++;
//       }
//     }

//     // ➤ Date de publication
//     if (job.datePosted) {
//       const jobDate = new Date(job.datePosted);
//       const now = new Date();
//       const diffTime = Math.abs(now.getTime() - jobDate.getTime());
//       const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

//       const all = this.datePostedOptions.find(dpo => dpo.value === 'all');
//       if (all) all.count++;

//       if (diffDays <= 1) {
//         const last24 = this.datePostedOptions.find(dpo => dpo.value === 'last24hours');
//         if (last24) last24.count++;
//       }

//       if (diffDays <= 7) {
//         const last7 = this.datePostedOptions.find(dpo => dpo.value === 'last7days');
//         if (last7) last7.count++;
//       }

//       if (diffDays <= 30) {
//         const last30 = this.datePostedOptions.find(dpo => dpo.value === 'last30days');
//         if (last30) last30.count++;
//       }
//     }
//   });
// }


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

  onExperienceChange(event: any, experienceLevel: string): void {
    if (event.target.checked) {
      this.selectedExperienceLevels.push(experienceLevel);
    } else {
      this.selectedExperienceLevels = this.selectedExperienceLevels.filter(exp => exp !== experienceLevel);
    }
    this.applyFilters();
  }

  onDatePostedChange(event: any, dateOptionValue: string): void {
    if (event.target.checked) {
      // Pour une sélection unique, videz le tableau avant d'ajouter
      this.selectedDates = [dateOptionValue];
      // Pour une sélection multiple, laissez ceci: this.selectedDates.push(dateOptionValue);
    } else {
      this.selectedDates = this.selectedDates.filter(date => date !== dateOptionValue);
    }
    this.applyFilters();
  }

  loadJobs(page: number, size: number): void {
    this.jobService.getJobs(page, size, this.keyword).subscribe({
      next: (data) => {
        this.allJobs = data.content; 
        this.totalElements = data.totalElements; 
        this.totalPages = data.totalPages;
        this.currentPage = data.number;

        this.updateFilterCounts(); 
        this.applyFilters(); 
      },
      error: (err) => {
        console.error('Erreur lors du chargement des jobs', err);
        // Si le service échoue, initialiser des données statiques pour les filtres
        this.applyFilters();
      }
    });
  }
// loadJobs(page: number, size: number): void {
//   this.jobService.getJobs(page, size, this.keyword).subscribe({
//     next: (data) => {
//       this.allJobs = data.content; 
//       this.totalElements = data.totalElements; 
//       this.totalPages = data.totalPages;
//       this.currentPage = data.number;

//       this.updateFilterCounts(); 
//       this.applyFilters(); 
//     },
//     error: (err) => {
//       console.error('Erreur lors du chargement des jobs', err);
//       this.applyFilters();
//     }
//   });
// }

 
  // Méthode pour aller à une page spécifique
  goToPage(pageIndex: number): void {
    if (pageIndex >= 0 && pageIndex < this.totalPages) {
      this.currentPage = pageIndex;
     // this.loadJobs(this.currentPage, this.pageSize);// Recharge les jobs pour la nouvelle page
       this.updateDisplayedJobs();  
    }
  }

  nextPage(): void {
    if (this.currentPage + 1 < this.totalPages) {
      this.goToPage(this.currentPage + 1);
    }
  }

  previousPage(): void {
    if (this.currentPage > 0) {
      this.goToPage(this.currentPage - 1);
    }
  }

  // Logique principale de filtrage
applyFilters(): void { 
  // 1. Filtrer TOUTES les offres d'emploi (allJobs) basées sur les critères
  let tempFilteredJobs = this.allJobs.filter(job => {
    // Filtrage par localisation
    const matchesLocation = !this.selectedLocation ||
                            job.location?.toLowerCase().includes(this.selectedLocation.toLowerCase());

    // Filtrage par catégorie
    const matchesCategory = this.selectedCategories.length === 0 ||
                            this.selectedCategories.includes(job.categoryName);

    // Filtrage par type d'emploi
    const matchesJobType = this.selectedJobTypes.length === 0 ||
                           this.selectedJobTypes.includes(job.jobType);

    // Filtrage par niveau d'expérience
    const matchesExperience = this.selectedExperienceLevels.length === 0 ||
                              (job.yearExperience !== undefined && job.yearExperience !== null &&
                               this.selectedExperienceLevels.some(selectedExpLevel => {
                                 if (selectedExpLevel === 'no-experience') return job.yearExperience === 0;
                                 if (selectedExpLevel === 'entry-level') return job.yearExperience >= 1 && job.yearExperience <= 2;
                                 if (selectedExpLevel === 'mid-level') return job.yearExperience > 2 && job.yearExperience <= 5;
                                 if (selectedExpLevel === 'senior-level') return job.yearExperience > 5 && job.yearExperience <= 10;
                                 if (selectedExpLevel === 'director') return job.yearExperience > 10;
                                 return false;
                               }));

    // Filtrage par date de publication
    const matchesDate = this.selectedDates.length === 0 ||
                        this.selectedDates.includes('all') ||
                        (job.datePosted && this.selectedDates.some(selectedDateValue => {
                          const jobDate = new Date(job.datePosted);
                          const now = new Date();
                          const diffTime = Math.abs(now.getTime() - jobDate.getTime());
                          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Différence en jours

                          if (selectedDateValue === 'last24hours') return diffDays <= 1;
                          if (selectedDateValue === 'last7days') return diffDays <= 7;
                          if (selectedDateValue === 'last30days') return diffDays <= 30;
                          return false;
                        }));

    // Filtrage par salaire
    const matchesSalary = (job.pay !== undefined && job.pay !== null) &&
                          job.pay >= this.minSalary &&
                          job.pay <= this.maxSalary;

    return matchesLocation && matchesCategory &&
           matchesJobType && matchesExperience &&
           matchesDate && matchesSalary;
  });

  this.filteredJobs = tempFilteredJobs; // Stocke les jobs filtrés
  this.goToPage(0); // Retourne à la première page des résultats filtrés

  // Trier les résultats filtrés selon la date
 tempFilteredJobs.sort((a, b) => {
    const dateA = new Date(a.datePosted).getTime();
    const dateB = new Date(b.datePosted).getTime();

    if (this.sortOrder === 'latest') {
      return dateB - dateA; // Plus récent en premier
    } else if (this.sortOrder === 'oldest') {
      return dateA - dateB; // Plus ancien en premier
    } else {
      return 0;
    }
  });

  // 2. Mettre à jour l'affichage des jobs paginés
  this.updateDisplayedJobs();

}

updateDisplayedJobs(): void {
  const startIndex = this.currentPage * this.pageSize;
  const endIndex = startIndex + this.pageSize;
  this.displayedJobs = this.filteredJobs.slice(startIndex, endIndex);
  this.totalPages = Math.ceil(this.filteredJobs.length / this.pageSize);
}


  applySalaryFilter(): void {
    this.applyFilters();
  }

  // --- Autres méthodes ---
  toggleFavorite(jobId: number): void {
    if (this.favoriteJobIds.has(jobId)) {
      this.favoriteJobIds.delete(jobId);
    } else {
      this.favoriteJobIds.add(jobId);
    }
  }

  isFavorite(jobId: number): boolean {
    return this.favoriteJobIds.has(jobId);
  }

  goToJobDetails(jobId: number): void {
    this.router.navigate(['/jobs', jobId]);
  }

  selectLocation(city: string): void {
    this.selectedLocation = city;
    this.showLocationDropdown = false;
    this.applyFilters();
  }

  onLocationInputBlur(): void {
    setTimeout(() => {
      this.showLocationDropdown = false;
    }, 200);
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
  getTimeAgo(dateString: string): string {
  if (!dateString) return '';
  try {
    const date = parseISO(dateString);
    return formatDistanceToNow(date, { addSuffix: true, locale: fr });  // <-- Utiliser la locale ici
  } catch {
    return '';
  }
}


}