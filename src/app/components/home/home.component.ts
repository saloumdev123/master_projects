import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobApplicationComponent } from "../job-application/job-application.component";
import { ResourceComponent } from '../resource/resource.component';
import { AboutComponent } from "../about/about.component";
import { ContactComponent } from '../contact/contact.component';
import { HeroComponent } from '../hero/hero.component';
import { RecentJobComponent } from '../recent-job/recent-job.component';
import { CategoryComponent } from '../category/category.component';
import { CareerInfoComponent } from '../career-info/career-info.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { BlogComponent } from '../blog/blog.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    JobApplicationComponent,
    ResourceComponent,
    HeroComponent,
    RecentJobComponent,
    CategoryComponent,  
    CareerInfoComponent,
    AboutComponent,
    ContactComponent,
    TestimonialsComponent,
    BlogComponent
],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  currentSection: string = '';
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
  { key: 'resource', label: 'Resources', icon: 'fas fa-book' }
];

}
