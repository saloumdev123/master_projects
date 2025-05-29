import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidatService } from '../../services/candidat.service';
import { Candidat } from '../../interfaces/candidate';

@Component({
  selector: 'app-candidat-detail',
  standalone: true,
  imports: [],
  templateUrl: './candidat-detail.component.html',
  styleUrl: './candidat-detail.component.css'
})
export class CandidatDetailComponent {
candidat!: Candidat;

  constructor(
    private route: ActivatedRoute,
    private candidatService: CandidatService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.candidatService.getCandidatById(id).subscribe(data => {
      this.candidat = data;
    });
  }
}
