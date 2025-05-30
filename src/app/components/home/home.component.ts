import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
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
    HeroComponent,
    RecentJobComponent,
    CategoryComponent,
    CareerInfoComponent,
    TestimonialsComponent,
    BlogComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor() { }
}