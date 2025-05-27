import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  categories = [
    { name: 'Agriculture', jobsCount: 1254, iconClass: 'fas fa-leaf' },
    { name: 'Informatique', jobsCount: 816, iconClass: 'fas fa-laptop-code' },
    { name: 'Commerce', jobsCount: 2082, iconClass: 'fas fa-shopping-bag' },
    { name: 'Construction', jobsCount: 1520, iconClass: 'fas fa-hard-hat' },
    { name: 'Hôtellerie & Tourisme', jobsCount: 1022, iconClass: 'fas fa-hotel' }, 
    { name: 'Éducation', jobsCount: 1496, iconClass: 'fas fa-graduation-cap' }, 
    { name: 'Services Financiers', jobsCount: 1529, iconClass: 'fas fa-money-bill-wave' }, 
    { name: 'Transport', jobsCount: 1244, iconClass: 'fas fa-truck' }
  ];

  constructor() { }
}