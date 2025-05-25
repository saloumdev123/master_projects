import { Routes } from '@angular/router';
import { JobApplicationComponent } from './components/job-application/job-application.component';
import { JobComponent } from './components/job/job.component';
import { HomeComponent } from './components/home/home.component';
import { ApplySuccessComponent } from './components/apply-success/apply-success.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'job-applications', component: JobApplicationComponent },
    { path: 'job-list', component: JobComponent },
    {path: 'apply-success', component: ApplySuccessComponent},
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];
