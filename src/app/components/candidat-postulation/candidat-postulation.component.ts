import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CandidatService } from '../../services/candidat.service';


@Component({
  selector: 'app-candidat-postulation',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './candidat-postulation.component.html',
  styleUrl: './candidat-postulation.component.css'
})
export class CandidatPostulationComponent {

  @Input() candidatId!: number;
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private candidatService: CandidatService
  ) {
    this.form = this.fb.group({
      jobId: [null, Validators.required],
      lettreMotivation: ['', Validators.required],
      resume: ['', Validators.required]
    });
  }

  postuler(): void {
    this.candidatService.postuler(this.candidatId, this.form.value).subscribe();
  }
}
