import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router, Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit{
  isMenuOpen: boolean = false;
  jobId!: number;
constructor(private route: ActivatedRoute ){}
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
ngOnInit(): void {
    this.jobId = +this.route.snapshot.paramMap.get('id')!;
    // ensuite appelle ton service pour charger les détails
  }
}
