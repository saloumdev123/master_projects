import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {

  testimonials = [
    {
      title: 'Services Incroyables',
      quote: 'Les services de JobConnect sont exceptionnels. J\'ai trouvé un emploi qui correspond parfaitement à mes attentes, et le processus a été fluide et efficace. Je recommande vivement !',
      clientName: 'Fatou Diop',
      clientRole: 'Développeuse Web',
      avatar: 'assets/images/avatar.webp',
      rating: 5
    },
    {
      title: 'Gain de temps précieux',
      quote: 'En tant que recruteur, la simplicité de la plateforme JobConnect est un atout majeur. Nous trouvons des profils qualifiés rapidement, ce qui optimise grandement nos processus de recrutement. C\'est un outil indispensable !', 
      clientName: 'Mamadou Diallo',
      clientRole: 'Recruteur',
      avatar: 'assets/images/avatar.webp',
      rating: 5
    },
    {
      title: 'Génial, merci !',
      quote: 'JobConnect m\'a ouvert des portes inattendues. Grâce à eux, j\'ai décroché un poste dans une entreprise de rêve. Un grand merci à toute l\'équipe pour leur soutien !',
      clientName: 'Aïcha Traoré',
      clientRole: 'Étudiante',
      avatar: 'assets/images/avatar.webp',
      rating: 5
    }
  ];

  constructor() { }
}