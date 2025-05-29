import { Component, Input } from '@angular/core';
import { CandidatService } from '../../services/candidat.service';
import { JobApplication } from '../../interfaces/job-application';

@Component({
  selector: 'app-candidat-candidature',
  standalone: true,
  imports: [],
  templateUrl: './candidat-candidature.component.html',
  styleUrl: './candidat-candidature.component.css'
})
export class CandidatCandidatureComponent {

  @Input() candidatId!: number;
  candidatures: JobApplication[] = [];

  constructor(private candidatService: CandidatService) {}

  ngOnInit(): void {
    this.candidatService.getCandidaturesByCandidat(this.candidatId).subscribe(data => {
      this.candidatures = data;
    });
  }
}
