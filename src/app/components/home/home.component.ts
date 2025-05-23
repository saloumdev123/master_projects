import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobApplicationComponent } from "../job-application/job-application.component";
import { JobComponent } from "../job/job.component";
import { ResourceComponent } from '../resource/resource.component';
import { SubscriptionComponent } from '../subscription/subscription.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    JobApplicationComponent,
    SubscriptionComponent,
    JobComponent,
    ResourceComponent
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
}
