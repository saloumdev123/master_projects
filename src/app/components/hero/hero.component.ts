import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  isMenuOpen: boolean = false;
  selectedRegion: string = '';
  selectedCategory: string = '';
  searchTerm: string = '';

  regions: string[] = [
    'Dakar',
    'Diourbel',
    'Fatick',
    'Kaffrine',
    'Kaolack',
    'Kédougou',
    'Kolda',
    'Louga',
    'Matam',
    'Saint-Louis',
    'Sédhiou',
    'Tambacounda',
    'Thiès',
    'Ziguinchor'
  ];

  categories: string[] = [
    'Informatique & Télécoms',
    'Marketing & Communication',
    'Finance & Comptabilité',
    'Ressources Humaines',
    'Ingénierie',
    'Santé & Social',
    'Commerce & Ventes',
    'Éducation & Formation',
    'Transport & Logistique',
    'Agriculture & Environnement',
    'Tourisme & Hôtellerie',
    'Bâtiment & Construction',
    'Administration & Secrétariat',
    'Artisanat & Métiers Manuels',
    'Juridique',
    'Autres'
  ];

  constructor() { }

  // Méthode pour basculer l'état du menu mobile
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  performSearch() {
    console.log('Recherche lancée avec :');
    console.log('Poste/Entreprise:', this.searchTerm);
    console.log('Région sélectionnée:', this.selectedRegion);
    console.log('Catégorie sélectionnée:', this.selectedCategory);
  }
}