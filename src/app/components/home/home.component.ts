import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobApplicationComponent } from "../job-application/job-application.component";
import { JobComponent } from "../job/job.component";
import { ResourceComponent } from '../resource/resource.component';
import { AboutComponent } from "../about/about.component";
import { ContactComponent } from '../contact/contact.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    JobApplicationComponent,
    JobComponent,
    ResourceComponent,
    AboutComponent,
    ContactComponent
],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  currentSection: string = 'resource';
  sidebarCollapsed = false;

  toggleSidebar(): void {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }

  showSection(section: string): void {
    this.currentSection = section;
  }

  menuItems = [
  { key: 'job', label: 'Jobs', icon: 'fas fa-briefcase' },
  { key: 'jobApplication', label: 'Applications', icon: 'fas fa-file-alt' },
  { key: 'resource', label: 'Resources', icon: 'fas fa-book' },
  { key: 'subscription', label: 'Subscriptions', icon: 'fas fa-bell' }
];

}
