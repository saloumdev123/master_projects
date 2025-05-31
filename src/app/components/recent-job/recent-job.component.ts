import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router'; 

// Interface pour définir la structure d'un objet Job
interface Job {
  id: number;
  timeAgo: string;
  bookmarked: boolean;
  companyLogoUrl: string;
  logoBgColor?: string;
  logoIcon?: string;
  logoIconColor?: string;
  title: string;
  company: string;
  category: string;
  categoryIcon: string;
  employmentType: string;
  typeIcon: string;
  salary: string;
  salaryIcon: string;
  location: string;
  locationIcon: string;
}

@Component({
  selector: 'app-recent-job',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './recent-job.component.html',
  styleUrls: ['./recent-job.component.css']
})
export class RecentJobComponent implements OnInit {

  recentJobs: Job[] = [];
  
  constructor(private router: Router) { } 

  ngOnInit(): void {
    this.recentJobs = [
      {
        id: 1, 
        timeAgo: '10 min ago',
        bookmarked: false,
        companyLogoUrl: 'assets/images/company_1.png',
        logoBgColor: '#e0f7fa',
        logoIcon: 'fas fa-globe',
        logoIconColor: '#00796b',
        title: 'Directeur Sécurité Informatique',
        company: 'Sonatel S.A.',
        category: 'IT & Télécoms',
        categoryIcon: 'fas fa-suitcase',
        employmentType: 'Temps Plein',
        typeIcon: 'far fa-clock',
        salary: '500.000 - 750.000 XOF',
        salaryIcon: 'fas fa-dollar-sign',
        location: 'Dakar, Sénégal',
        locationIcon: 'fas fa-map-marker-alt'
      },
      {
        id: 2,
        timeAgo: '12 min ago',
        bookmarked: false,
        companyLogoUrl: 'assets/images/company_2.jpeg',
        logoBgColor: 'linear-gradient(135deg, #FFB8B8 0%, #A4E2A4 100%)',
        logoIcon: 'fas fa-palette',
        logoIconColor: '#333',
        title: 'Coordinateur Marketing Digital',
        company: 'Orange Sénégal',
        category: 'Marketing & Com.',
        categoryIcon: 'fas fa-briefcase',
        employmentType: 'Temps Partiel',
        typeIcon: 'far fa-clock',
        salary: '250.000 - 350.000 XOF',
        salaryIcon: 'fas fa-dollar-sign',
        location: 'Thiès, Sénégal',
        locationIcon: 'fas fa-map-marker-alt'
      },
      {
        id: 3,
        timeAgo: '15 min ago',
        bookmarked: false,
        companyLogoUrl: 'assets/images/company_3.jpeg',
        logoBgColor: '#e8f5e9',
        logoIcon: 'fas fa-hard-hat',
        logoIconColor: '#388e3c',
        title: 'Ingénieur Civil Junior',
        company: 'Compagnie Sénégalaise d\'Electricité (CSE)',
        category: 'Construction',
        categoryIcon: 'fas fa-toolbox',
        employmentType: 'Temps Plein',
        typeIcon: 'far fa-clock',
        salary: '400.000 - 600.000 XOF',
        salaryIcon: 'fas fa-dollar-sign',
        location: 'Saint-Louis, Sénégal',
        locationIcon: 'fas fa-map-marker-alt'
      },
      {
        id: 4,
        timeAgo: '24 min ago',
        bookmarked: false,
        companyLogoUrl: 'assets/images/company_4.png',
        logoBgColor: '#e3f2fd',
        logoIcon: 'fas fa-shopping-cart',
        logoIconColor: '#1976d2',
        title: 'Responsable Logistique',
        company: 'Dangote Cement Sénégal',
        category: 'Transport & Logistique',
        categoryIcon: 'fas fa-truck',
        employmentType: 'Temps Plein',
        typeIcon: 'far fa-clock',
        salary: '450.000 - 650.000 XOF',
        salaryIcon: 'fas fa-dollar-sign',
        location: 'Rufisque, Sénégal',
        locationIcon: 'fas fa-map-marker-alt'
      },
      {
        id: 5,
        timeAgo: '26 min ago',
        bookmarked: false,
        companyLogoUrl: 'assets/images/company_1.png',
        logoBgColor: '#fff3e0',
        logoIcon: 'fas fa-briefcase',
        logoIconColor: '#f57c00',
        title: 'Assistant(e) Administratif(ve)',
        company: 'GIE Zone Franche de Dakar',
        category: 'Administration',
        categoryIcon: 'fas fa-user-tie',
        employmentType: 'Temps Plein',
        typeIcon: 'far fa-clock',
        salary: '200.000 - 300.000 XOF',
        salaryIcon: 'fas fa-dollar-sign',
        location: 'Diamniadio, Sénégal',
        locationIcon: 'fas fa-map-marker-alt'
      },
      {
        id: 6,
        timeAgo: '30 min ago',
        bookmarked: false,
        companyLogoUrl: 'assets/images/company_2.jpeg',
        logoBgColor: '#f3e5f5',
        logoIcon: 'fas fa-chalkboard-teacher',
        logoIconColor: '#ab47bc',
        title: 'Comptable Junior',
        company: 'Ecobank Sénégal',
        category: 'Finance & Comptabilité',
        categoryIcon: 'fas fa-chart-pie',
        employmentType: 'Temps Plein',
        typeIcon: 'far fa-clock',
        salary: '300.000 - 450.000 XOF',
        salaryIcon: 'fas fa-dollar-sign',
        location: 'Dakar, Sénégal',
        locationIcon: 'fas fa-map-marker-alt'
      },
      {
        id: 7,
        timeAgo: '45 min ago',
        bookmarked: false,
        companyLogoUrl: 'assets/images/company_1.png',
        logoBgColor: '#e0f2f7',
        logoIcon: 'fas fa-building',
        logoIconColor: '#00bcd4',
        title: 'Responsable des Ressources Humaines',
        company: 'Tigo Sénégal',
        category: 'Ressources Humaines',
        categoryIcon: 'fas fa-users',
        employmentType: 'Temps Plein',
        typeIcon: 'far fa-clock',
        salary: '600.000 - 900.000 XOF',
        salaryIcon: 'fas fa-dollar-sign',
        location: 'Dakar, Sénégal',
        locationIcon: 'fas fa-map-marker-alt'
      },
      {
        id: 8,
        timeAgo: '50 min ago',
        bookmarked: false,
        companyLogoUrl: 'assets/images/company_2.jpeg',
        logoBgColor: '#ffebee',
        logoIcon: 'fas fa-heartbeat',
        logoIconColor: '#e53935',
        title: 'Infirmier(ère) Diplômé(e) d\'État',
        company: 'Hôpital Général de Grand Yoff',
        category: 'Santé',
        categoryIcon: 'fas fa-hand-holding-medical',
        employmentType: 'Temps Plein',
        typeIcon: 'far fa-clock',
        salary: '350.000 - 500.000 XOF',
        salaryIcon: 'fas fa-dollar-sign',
        location: 'Dakar, Sénégal',
        locationIcon: 'fas fa-map-marker-alt'
      },
      {
        id: 9,
        timeAgo: '1 hour ago',
        bookmarked: false,
        companyLogoUrl: 'assets/images/company_3.jpeg',
        logoBgColor: '#fce4ec',
        logoIcon: 'fas fa-utensils',
        logoIconColor: '#d81b60',
        title: 'Chef Cuisinier',
        company: 'Restaurant Le Terroir',
        category: 'Hôtellerie & Restauration',
        categoryIcon: 'fas fa-utensils',
        employmentType: 'Temps Plein',
        typeIcon: 'far fa-clock',
        salary: '250.000 - 400.000 XOF',
        salaryIcon: 'fas fa-dollar-sign',
        location: 'Saly Portudal, Sénégal',
        locationIcon: 'fas fa-map-marker-alt'
      },
      {
        id: 10,
        timeAgo: '1 hour 15 min ago',
        bookmarked: false,
        companyLogoUrl: 'assets/images/company_4.png',
        logoBgColor: '#e8f5e9',
        logoIcon: 'fas fa-tractor',
        logoIconColor: '#43a047',
        title: 'Technicien(ne) Agricole',
        company: 'Société Agricole du Sénégal',
        category: 'Agriculture',
        categoryIcon: 'fas fa-leaf',
        employmentType: 'Temps Plein',
        typeIcon: 'far fa-clock',
        salary: '200.000 - 300.000 XOF',
        salaryIcon: 'fas fa-dollar-sign',
        location: 'Diourbel, Sénégal',
        locationIcon: 'fas fa-map-marker-alt'
      }
    ];
  }

  toggleBookmark(job: Job): void {
    job.bookmarked = !job.bookmarked;
    console.log(`Job ${job.id} bookmarked: ${job.bookmarked}`);
  }

  // méthode pour la redirection vers les détails de l'emploi
  viewJobDetails(job: Job): void {
    console.log('Voir les détails du job:', job.title);
    // Navigue vers la route 'job-details' avec l'ID de l'emploi
    this.router.navigate(['/job-details', job.id]);
  }
}