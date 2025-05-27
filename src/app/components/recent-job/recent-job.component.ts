import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  location: string;
}

@Component({
  selector: 'app-recent-job',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recent-job.component.html',
  styleUrls: ['./recent-job.component.css']
})
export class RecentJobComponent implements OnInit {

  recentJobs: Job[] = [];

  constructor() { }

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
        title: 'Développeur Full-Stack (Angular/Node.js)',
        company: 'Innovatech Solutions',
        category: 'Informatique & IT',
        categoryIcon: 'fas fa-laptop-code',
        employmentType: 'Temps plein',
        salary: '750 000 - 1 200 000 XOF',
        location: 'Dakar, Sénégal',
        typeIcon: 'far fa-clock'
      },
      {
        id: 2,
        timeAgo: '12 min ago',
        bookmarked: false,
        companyLogoUrl: 'assets/images/company_2.jpeg',
        logoBgColor: 'linear-gradient(135deg, #FFB8B8 0%, #A4E2A4 100%)',
        logoIcon: 'fas fa-palette',
        logoIconColor: '#333',
        title: 'Responsable Marketing Digital',
        company: 'Banque Atlantique Sénégal',
        category: 'Marketing & Communication',
        categoryIcon: 'fas fa-bullhorn',
        employmentType: 'Temps plein',
        salary: '600 000 - 950 000 XOF',
        location: 'Dakar, Sénégal',
        typeIcon: 'far fa-clock'
      },
      {
        id: 3,
        timeAgo: '15 min ago',
        bookmarked: false,
        companyLogoUrl: 'assets/images/company_3.jpeg',
        logoBgColor: '#e8f5e9',
        logoIcon: 'fas fa-hard-hat',
        logoIconColor: '#388e3c',
        title: 'Agronome / Chef de Projet Agricole',
        company: 'AgriSénégal SA',
        category: 'Agriculture & Environnement',
        categoryIcon: 'fas fa-leaf',
        employmentType: 'Temps plein',
        salary: '500 000 - 800 000 XOF',
        location: 'Thiès, Sénégal',
        typeIcon: 'far fa-clock'
      },
      {
        id: 4,
        timeAgo: '24 min ago',
        bookmarked: false,
        companyLogoUrl: 'assets/images/company_1.png',
        logoBgColor: '#e3f2fd',
        logoIcon: 'fas fa-shopping-cart',
        logoIconColor: '#1976d2',
        title: 'Assistant Administratif et Financier',
        company: 'Cabinet Conseil Alpha',
        category: 'Administration & Finance',
        categoryIcon: 'fas fa-money-check-alt',
        employmentType: 'Temps partiel',
        salary: '300 000 - 450 000 XOF',
        location: 'Toubab Dialaw, Sénégal',
        typeIcon: 'far fa-clock'
      },
      {
        id: 5,
        timeAgo: '26 min ago',
        bookmarked: false,
        companyLogoUrl: 'assets/images/logo.png',
        logoBgColor: '#fff3e0',
        logoIcon: 'fas fa-briefcase',
        logoIconColor: '#f57c00',
        title: 'Coordinateur de Projet Humanitaire',
        company: 'ONG Lumière Afrique',
        category: 'Social & Humanitaire',
        categoryIcon: 'fas fa-hands-helping',
        employmentType: 'Contrat (12 mois)',
        salary: '550 000 - 700 000 XOF',
        location: 'Saint-Louis, Sénégal',
        typeIcon: 'far fa-clock'
      },
      {
        id: 6,
        timeAgo: '30 min ago',
        bookmarked: false,
        companyLogoUrl: 'assets/images/company_2.jpeg',
        logoBgColor: '#f3e5f5',
        logoIcon: 'fas fa-chalkboard-teacher',
        logoIconColor: '#ab47bc',
        title: 'Enseignant(e) de Français (Lycée)',
        company: 'Lycée Privé Excellence',
        category: 'Éducation & Formation',
        categoryIcon: 'fas fa-graduation-cap',
        employmentType: 'Temps plein',
        salary: '400 000 - 550 000 XOF',
        location: 'Kaolack, Sénégal',
        typeIcon: 'far fa-clock'
      },
      {
        id: 7,
        timeAgo: '45 min ago',
        bookmarked: false,
        companyLogoUrl: 'assets/images/company_3.jpeg',
        logoBgColor: '#e0f2f7',
        logoIcon: 'fas fa-building',
        logoIconColor: '#00bcd4',
        title: 'Ingénieur en Génie Civil',
        company: 'BTP Plus Construction',
        category: 'Construction & BTP',
        categoryIcon: 'fas fa-hard-hat',
        employmentType: 'Temps plein',
        salary: '800 000 - 1 500 000 XOF',
        location: 'Dakar, Sénégal',
        typeIcon: 'far fa-clock'
      }
    ];
  }

  toggleBookmark(job: Job): void {
    job.bookmarked = !job.bookmarked;
    console.log(`Job ${job.id} bookmarked: ${job.bookmarked}`);
  }

  viewJobDetails(job: Job): void {
    console.log('Voir les détails du job:', job.title);
  }
}