import { Injectable } from '@angular/core';
import { JobApplication } from '../interfaces/job-application';
import { Observable } from 'rxjs';
import { Candidat } from '../interfaces/candidate';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

 private apiUrl = 'http://localhost:8080/api/candidats'; // À adapter si besoin

  constructor(private http: HttpClient) {}

  createCandidat(candidat: Candidat): Observable<Candidat> {
    return this.http.post<Candidat>(`${this.apiUrl}`, candidat);
  }

  updateCandidat(id: number, candidat: Candidat): Observable<Candidat> {
    return this.http.put<Candidat>(`${this.apiUrl}/${id}`, candidat);
  }

  getCandidatById(id: number): Observable<Candidat> {
    return this.http.get<Candidat>(`${this.apiUrl}/${id}`);
  }

  deleteCandidat(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  postuler(id: number, application: JobApplication): Observable<JobApplication> {
    return this.http.post<JobApplication>(`${this.apiUrl}/${id}/postuler`, application);
  }

  getCandidaturesByCandidat(id: number): Observable<JobApplication[]> {
    return this.http.get<JobApplication[]>(`${this.apiUrl}/${id}/candidatures`);
  }
}
