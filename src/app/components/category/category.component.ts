import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Category } from '../../interfaces/category';
import { CategorieService } from '../../services/categorie.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
   categories: Category[] = [];

  constructor(private categorieService: CategorieService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categorieService.getAll().subscribe({
      next: (data: Category[]) => {
        this.categories = data;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des catégories:', err);
      }
    });
  }

  increment(id: number): void {
  this.categorieService.incrementJobsCount(id).subscribe({
    next: updatedCategory => {
      // Mets à jour la liste locale après incrémentation
      const index = this.categories.findIndex(cat => cat.id === id);
      if (index !== -1) {
        this.categories[index] = updatedCategory;
      }
    },
    error: err => {
      console.error('Erreur lors de l\'incrémentation:', err);
    }
  });
  }
}