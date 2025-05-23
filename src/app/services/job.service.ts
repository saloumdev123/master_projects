// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Job } from '../interfaces/job';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class JobService {

//   private apiUrl = 'http://localhost:8080/api/jobs';

//   jobs: Job[] = [];

//   constructor(private http: HttpClient) {}

//   getJobs(): Observable<Job[]> {
//     return this.http.get<Job[]>(this.apiUrl);
//   }

//   getJobById(id: number): Observable<Job> {
//     const url = `${this.apiUrl}/${id}`;
//     return this.http.get<Job>(url);
//   }
// }
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Job } from '../interfaces/job';
import { Observable } from 'rxjs';

interface JobPage {
  content: Job[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
}

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private apiUrl = 'http://localhost:8080/api/jobs';

  constructor(private http: HttpClient) {}

  getJobs(page: number, size: number): Observable<JobPage> {
    return this.http.get<JobPage>(`${this.apiUrl}?page=${page}&size=${size}`);
  }

  getJobById(id: number): Observable<Job> {
    return this.http.get<Job>(`${this.apiUrl}/${id}`);
  }

  
}
