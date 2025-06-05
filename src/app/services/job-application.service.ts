import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JobApplication } from '../interfaces/job-application';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobApplicationService {

  private apiUrl = 'http://localhost:8080/api/job-applications';

  constructor(private http: HttpClient) {}

  applyForAJob(jobApplication: JobApplication): Observable<JobApplication> {
    console.log('Sending job application:', jobApplication);
    return this.http
      .post<JobApplication>(this.apiUrl, jobApplication)
      .pipe(catchError(this.handleError<JobApplication>('/applyForAJob')));
      
  }
  applyWithFormData(formData: FormData): Observable<any> {
  return this.http.post(`${this.apiUrl}/apply`, formData).pipe(
    catchError(this.handleError<any>('applyWithFormData'))
  );
}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  submitApplication(formData: FormData): Observable<JobApplication> {
    return this.http.post<JobApplication>(this.apiUrl, formData);
  }

}
