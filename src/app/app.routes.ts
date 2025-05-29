import { Routes } from '@angular/router';
import { JobApplicationComponent } from './components/job-application/job-application.component';
import { HomeComponent } from './components/home/home.component';
import { ApplySuccessComponent } from './components/apply-success/apply-success.component';
import { CandidatDetailComponent } from './components/candidat-detail/candidat-detail.component';
import { CandidatCandidatureComponent } from './components/candidat-candidature/candidat-candidature.component';
import { CandidatPostulationComponent } from './components/candidat-postulation/candidat-postulation.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'job-applications', component: JobApplicationComponent },
    {path: 'apply-success', component: ApplySuccessComponent},
    {path: 'detailCandidat', component: CandidatDetailComponent},
    {path:'maCandidature', component: CandidatCandidatureComponent},
    {path:'postulerCadidat', component: CandidatPostulationComponent}
];
