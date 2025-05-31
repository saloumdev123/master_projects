import { Component } from '@angular/core';
import { RecruiterService } from '../../services/recruiter.service';
import { Recruiter } from '../../interfaces/recruiter';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recruiter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './recruiter.component.html',
  styleUrl: './recruiter.component.css'
})
export class RecruiterComponent {
recruiter: Recruiter = {
    id: 0,
    username: '',
    email: '',
    fullName: '',
    phoneNumber: '',
    enabled: true,
    role: 'RECRUITER',
    companyName: '',
    companyWebsite: '',
    companyAddress: ''
  };

  constructor(private recruiterService: RecruiterService) {}

  onSubmit() {
    this.recruiterService.createRecruiter(this.recruiter).subscribe({
      next: res => {
        alert('Recruiter created successfully');
        console.log(res);
      },
      error: err => {
        console.error('Error creating recruiter:', err);
      }
    });
  }
}
