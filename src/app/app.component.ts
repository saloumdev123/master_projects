import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./components/nav/nav.component";
import { FooterComponent } from "./components/footer/footer.component";
import { JobComponent } from './components/job/job.component';
import { AboutComponent } from "./components/about/about.component";
import { ContactComponent } from "./components/contact/contact.component";
import { PartnerComponent } from './components/partner/partner.component';
import { HeroComponent } from './components/hero/hero.component';
import { RecentJobComponent } from './components/recent-job/recent-job.component';
import { CategoryComponent } from './components/category/category.component';
import { CareerInfoComponent } from './components/career-info/career-info.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { BlogComponent } from './components/blog/blog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PartnerComponent, NavComponent, AboutComponent, ContactComponent, FooterComponent,JobComponent, HeroComponent, RecentJobComponent, CategoryComponent, CareerInfoComponent, TestimonialsComponent, BlogComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'job-connect-app';
}
