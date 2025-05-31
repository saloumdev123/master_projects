import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
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

  // Déclaration de l'objet 'application' avec le type JobApplication
  // Initialisation de toutes les propriétés requises par l'interface.
  // Les propriétés qui ne sont pas remplies par l'utilisateur seront des chaînes vides
  // ou des valeurs par défaut pour les nombres.
  application: JobApplication = {
    id: 0, // Ou une valeur par défaut appropriée si l'ID est auto-généré sur le backend
    fullName: '',
    email: '',
    phoneNumber: '', // Correspond à votre interface
    resume: '', // Ce champ sera une chaîne (URL/nom de fichier) après upload,
                // mais temporairement on gère le File dans onFileSelected
    country: '', // Correspond à votre interface
    city: '', // Correspond à votre interface
    jobTitle: '', // Sera rempli par le contexte de l'emploi affiché
    jobDescription: '', // Sera rempli par le contexte de l'emploi affiché
    jobApplicationStatus: 'Pending', // Statut initial par défaut
    dateCreated: new Date().toISOString(), // Date actuelle au moment de l'initialisation
    lettreMotivation: '', // Correspond à votre interface
    jobId: 0, // Sera rempli par le contexte de l'emploi affiché
    jobTitleFromJob: '', // Sera rempli par le contexte de l'emploi affiché
    candidatId: 0, // Sera rempli si l'utilisateur est connecté et identifié
    candidatFullName: '' // Sera rempli si l'utilisateur est connecté et identifié
  };


  constructor(private router: Router) { }

  ngOnInit(): void {
    // Idéalement, ici vous récupéreriez les détails de l'emploi actuel
    // et pré-rempliriez les champs 'jobTitle', 'jobDescription', 'jobId', 'jobTitleFromJob'
    // Vous pouvez aussi pré-remplir 'fullName', 'email', 'phoneNumber', 'country', 'city'
    // si l'utilisateur est connecté et a un profil enregistré.

    // Exemple de pré-remplissage (à adapter avec vos vraies données)
    this.application.jobId = 123; // Remplacez par l'ID réel de l'emploi
    this.application.jobTitleFromJob = 'Directeur Sécurité Informatique'; // Remplacez par le titre réel
    this.application.jobTitle = 'Directeur Sécurité Informatique'; // Peut être le même que jobTitleFromJob
    this.application.jobDescription = 'Description complète du poste...'; // Description réelle
    // Si l'utilisateur est connecté:
    // this.application.candidatId = user.id;
    // this.application.candidatFullName = user.fullName;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  goToJobDetails(jobId: string): void {
    this.router.navigate(['/job-details', jobId]);
  }

  openApplyPopup(): void {
    this.showApplyPopup = true;
  }

  closeApplyPopup(): void {
    this.showApplyPopup = false;
    this.resetApplicationForm();
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0] as File;
    this.selectedFile = file;

    // Dans votre interface, 'resume' est une 'string' (probablement le chemin/URL du CV).
    // Lorsque le fichier est sélectionné, vous stockez le File object.
    // L'envoi réel du fichier à un backend nécessitera un FormData.
    // Pour l'instant, on peut mettre le nom du fichier si on veut une trace textuelle,
    // mais le fichier réel est dans 'selectedFile'.
    if (this.selectedFile) {
        this.application.resume = this.selectedFile.name; // Pour avoir un nom de fichier dans l'objet
    } else {
        this.application.resume = '';
    }
  }

  submitApplication(): void {
    // Ici, vous préparez les données pour l'envoi à votre backend.
    // L'objet 'this.application' contient maintenant toutes les données textuelles du formulaire.
    // Le fichier CV est dans 'this.selectedFile'.

    console.log('Données de candidature prêtes à être envoyées:', this.application);
    if (this.selectedFile) {
      console.log('Fichier CV sélectionné:', this.selectedFile.name, this.selectedFile);
    }

    // IMPORTANT : Pour envoyer un fichier (CV) et d'autres données textuelles ensemble
    // à un backend, vous devez utiliser l'objet FormData.
    // Exemple (pseudo-code) :
    /*
    const formData = new FormData();
    for (const key in this.application) {
      if (Object.prototype.hasOwnProperty.call(this.application, key)) {
        formData.append(key, this.application[key as keyof JobApplication] as any);
      }
    }
    if (this.selectedFile) {
      formData.append('resumeFile', this.selectedFile, this.selectedFile.name);
    }

    // Envoyer 'formData' à votre service API
    this.jobApplicationService.createJobApplication(formData).subscribe(
      response => {
        console.log('Candidature envoyée avec succès', response);
        this.closeApplyPopup();
        // Afficher une notification de succès
      },
      error => {
        console.error('Erreur lors de l\'envoi de la candidature', error);
        // Afficher un message d'erreur
      }
    );
    */

    // Pour l'exemple actuel sans backend, on ferme simplement le popup
    this.closeApplyPopup();
  }

  resetApplicationForm(): void {
    // Réinitialisation de toutes les propriétés à leurs valeurs par défaut/vides
    this.application = {
      id: 0,
      fullName: '',
      email: '',
      phoneNumber: '',
      resume: '',
      country: '',
      city: '',
      jobTitle: '',
      jobDescription: '',
      jobApplicationStatus: 'Pending',
      dateCreated: new Date().toISOString(),
      lettreMotivation: '',
      jobId: 0,
      jobTitleFromJob: '',
      candidatId: 0,
      candidatFullName: ''
    };
    this.selectedFile = null;
  }
}