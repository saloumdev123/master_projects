import { AfterViewInit, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
export class JobComponent implements OnInit, AfterViewInit {

  searchTerm: string = '';
  selectedLocation: string = '';
  showLocationDropdown: boolean = false;
  minSalary: number = 0;
  maxSalary: number = 1000000;
  selectedSort: string = 'latest';

  isMenuOpen: boolean = false;
  isBrowser: boolean;

  categories: { name: string, count: number }[] = [
    { name: 'Télécommunications', count: 10 },
    { name: 'Hôtellerie & Tourisme', count: 10 },
    { name: 'Services Financiers', count: 10 },
    { name: 'Agriculture & Agro-alimentaire', count: 10 },
    { name: 'Construction & BTP', count: 10 },
    { name: 'Commerce & Ventes', count: 10 },
    { name: 'Santé & Social', count: 10 },
    { name: 'Transport & Logistique', count: 10 },
    { name: 'Administration & RH', count: 10 },
  ];

  jobTypes: { name: string, id: string, count: number }[] = [
    { name: 'CDD', id: 'fixedTerm', count: 10 },
    { name: 'CDI', id: 'permanent', count: 10 },
    { name: 'Stage', id: 'internship', count: 10 },
    { name: 'Temps Partiel', id: 'partTime', count: 10 },
    { name: 'Temps Plein', id: 'fullTime', count: 10 },
    { name: 'Télétravail', id: 'remote', count: 10 },
    { name: 'Freelance', id: 'freelance', count: 10 },
  ];

  experienceLevels: { name: string, id: string, count: number }[] = [
    { name: 'Pas d\'expérience', id: 'noExperience', count: 10 },
    { name: 'Débutant', id: 'fresher', count: 10 },
    { name: 'Intermédiaire', id: 'intermediate', count: 10 },
    { name: 'Expert', id: 'expert', count: 10 }
  ];

  datePostedOptions: { name: string, id: string, count: number }[] = [
    { name: 'Dernière heure', id: 'lastHour', count: 10 },
    { name: 'Dernières 24 heures', id: 'last24Hours', count: 10 },
    { name: 'Derniers 7 jours', id: 'last7Days', count: 10 },
    { name: 'Derniers 30 jours', id: 'last30Days', count: 10 },
    { name: 'Toutes les dates', id: 'allTime', count: 10 }
  ];

  senegaleseCities: string[] = [
    'Dakar', 'Thiès', 'Saint-Louis', 'Mbour', 'Kaolack', 'Ziguinchor', 'Diourbel', 'Touba',
    'Tambacounda', 'Kolda', 'Louga', 'Fatick', 'Kaffrine', 'Kédougou', 'Matam'
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
        console.log('JobComponent: ngAfterViewInit - Running in browser.');
    }
  }

  selectLocation(city: string) {
    this.selectedLocation = city;
    this.showLocationDropdown = false;
  }

  onLocationInputBlur() {
    if (this.isBrowser) {
        setTimeout(() => {
            const activeElem = document.activeElement;
            const dropdown = document.querySelector('.location-dropdown');
            if (!dropdown || !dropdown.contains(activeElem)) {
                this.showLocationDropdown = false;
            }
        }, 100);
    }
  }

  applySalaryFilter() {
    console.log('Filtre salaire appliqué (inputs): Min', this.minSalary, ' - Max', this.maxSalary);
    // Ajoutez la logique pour filtrer les emplois en fonction de minSalary et maxSalary
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}