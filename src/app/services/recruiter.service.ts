import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recruiter } from '../interfaces/recruiter';
import { Job } from '../interfaces/job';

@Injectable({
  providedIn: 'root'
})
export class RecruiterService {

   private apiUrl = 'http://localhost:8080/api/recruiters';

  constructor(private http: HttpClient) {}

  createRecruiter(recruiter: Recruiter): Observable<Recruiter> {
    return this.http.post<Recruiter>(`${this.apiUrl}`, recruiter);
  }

  getRecruiter(id: number): Observable<Recruiter> {
    return this.http.get<Recruiter>(`${this.apiUrl}/${id}`);
  }

  postJob(recruiterId: number, job: Job): Observable<Job> {
    return this.http.post<Job>(`${this.apiUrl}/${recruiterId}/jobs`, job);
  }

  getPostedJobs(recruiterId: number): Observable<Job[]> {
    return this.http.get<Job[]>(`${this.apiUrl}/${recruiterId}/jobs`);
  }
  
}
