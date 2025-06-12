import { HttpClient, HttpParams } from '@angular/common/http';
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

  getJobs(page: number, size: number, keyword?: string) {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    if (keyword) {
      params = params.set('keyword', keyword);
    }
    return this.http.get<JobPage>(`${this.apiUrl}`, { params });
  }

  getJobById(id: number): Observable<Job> {
    return this.http.get<Job>(`${this.apiUrl}/${id}`);
  }

getJobsByTitle(title: string, page: number = 0, size: number = 5): Observable<JobPage> {
  let params = new HttpParams()
    .set('title', title)
    .set('page', page.toString())
    .set('size', size.toString());

  return this.http.get<JobPage>(`${this.apiUrl}/title`, { params });
}


}