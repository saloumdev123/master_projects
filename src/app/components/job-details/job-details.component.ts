import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  isMenuOpen: boolean = false; 

  constructor(private router: Router) { } 

  ngOnInit(): void {
    
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // méthode pour la redirection vers les détails d'emploi
  goToJobDetails(jobId: string): void {
    this.router.navigate(['/job-details', jobId]);
  }
}