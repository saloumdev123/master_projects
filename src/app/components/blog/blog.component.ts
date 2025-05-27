import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  blogPosts = [
    {
      type: 'Actualités',
      date: '30 Mars 2024',
      title: 'Comment optimiser votre CV pour les recruteurs sénégalais',
      imageUrl: '../../assets/images/blog-cv.png',
      link: '#'
    },
    {
      type: 'Blog',
      date: '30 Mars 2024',
      title: 'Les secteurs porteurs au Sénégal en 2024 : guide complet',
      imageUrl: '../../assets/images/blog-port.jpeg',
      link: '#'
    }
  ];

  constructor() { }
}