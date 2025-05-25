import { Component, OnInit } from '@angular/core';
import { Resource } from '../../interfaces/resource';
import { ResourceService } from '../../services/resource.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-resource',
  standalone: true,
  imports: [],
  templateUrl: './resource.component.html',
  styleUrl: './resource.component.css'
})
export class ResourceComponent implements OnInit{

  resources: Resource[] = [];

  pageSize = 3;          // nombre d’éléments par page
  currentPage = 1;       // page courante
  pagedResources: Resource[] = [];

  constructor(private resourceService: ResourceService, private http: HttpClient) {}

  ngOnInit() {
    this.loadResources();
  }

  loadResources() {
    this.resourceService.getAllResources().subscribe(data => {
      this.resources = data;
      this.updatePagedResources();
    });
  }

  updatePagedResources() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.pagedResources = this.resources.slice(start, end);
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.updatePagedResources();
  }

  get totalPages(): number {
    return Math.ceil(this.resources.length / this.pageSize);
  }

  pages(): number[] {
    return Array(this.totalPages).fill(0).map((x, i) => i + 1);
  }
  downloadResource(resource: Resource) {
  if (!resource.downloadUrl) {
    alert("Lien de téléchargement non disponible.");
    return;
  }

  const link = document.createElement('a');
  link.href = resource.downloadUrl;
  link.download = resource.title || 'fichier';
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

}
