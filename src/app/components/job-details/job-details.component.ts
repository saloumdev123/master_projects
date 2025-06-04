import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Job } from '../../interfaces/job';
import { JobService } from '../../services/job.service';
import { JobApplicationService } from '../../services/job-application.service';
import { JobApplication } from '../../interfaces/job-application';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {
  isMenuOpen: boolean = false;
  showApplyPopup: boolean = false;
  selectedFile: File | null = null;
  similarJobs: Job[] = [];


application = {
  fullName: '',
  email: '',
  phoneNumber: '',
  country: '',
  city: ''
};


  job?: Job;

resetForm(): void {
  this.application = {
    fullName: '',
    email: '',
    phoneNumber: '',
    country: '',
    city: ''
  };
  this.selectedFile = null;
}


  constructor(
    private route: ActivatedRoute,
    private jobService: JobService,
    private router: Router,
    private jobApplicationService: JobApplicationService,
  ) {}

ngOnInit(): void {
  const jobId = Number(this.route.snapshot.paramMap.get('id'));
  if (isNaN(jobId)) {
    this.router.navigate(['/not-found']);
    return;
  }

  this.jobService.getJobById(jobId).subscribe({
    next: (jobData) => {
      this.job = jobData;
      if (this.job?.title) {
        this.loadSimilarJobs(this.job.title, jobId);
      }
    },
    error: (err) => {
      console.error('Erreur lors de la récupération des détails du job:', err);
      this.router.navigate(['/not-found']);
    }
  });
}


  openApplyPopup(): void {
    this.showApplyPopup = true;
  }

  closeApplyPopup(): void {
    this.showApplyPopup = false;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

 onFileSelected(event: Event): void {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    const file = input.files[0];
    if (file.type !== 'application/pdf') {
      alert("Veuillez sélectionner uniquement un fichier PDF.");
      return;
    }
    this.selectedFile = file;
    console.log('Fichier sélectionné :', this.selectedFile);
  }
}


submitApplication(): void {
  const { fullName, email, phoneNumber, country, city } = this.application;

  if (!fullName || !email || !phoneNumber || !country || !city) {
    alert("Veuillez remplir tous les champs du formulaire.");
    return;
  }

  if (!this.selectedFile) {
    alert("Veuillez sélectionner un fichier PDF pour le CV.");
    return;
  }

  const formData = new FormData();
  formData.append('fullName', fullName);
  formData.append('email', email);
  formData.append('phoneNumber', phoneNumber);
  formData.append('country', country);
  formData.append('city', city);
  formData.append('cv', this.selectedFile);

  this.jobApplicationService.applyWithFormData(formData).subscribe({
    next: (response) => {
      console.log('Candidature envoyée avec succès:', response);
      alert("Votre candidature a été envoyée !");
      this.closeApplyPopup();
      this.resetForm();
    },
    error: (error) => {
      console.error('Erreur lors de l’envoi de la candidature:', error);
      alert("Erreur lors de l’envoi de votre candidature.");
    }
  });
}



  goToJobDetails(jobId: string): void {
    this.router.navigate(['/jobs', jobId]);
  }
private loadSimilarJobs(title: string, currentJobId: number): void {
  this.jobService.getJobsByTitle(title, 0, 1).subscribe({
    next: (jobPage) => {
      if (Array.isArray(jobPage.content)) {
        this.similarJobs = jobPage.content.filter(j => j.id !== currentJobId);
      } else {
        this.similarJobs = [];
      }
    },
    error: (err) => {
      console.error('Erreur lors de la récupération des emplois similaires :', err);
      this.similarJobs = [];
    }
  });
}

}
