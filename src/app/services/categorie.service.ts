import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

 private apiUrl = 'http://localhost:8080/api/categories'; // adapte selon ton backend

  constructor(private http: HttpClient) {}

  create(category: Category): Observable<Category> {
    return this.http.post<Category>(this.apiUrl, category);
  }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }


  getById(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.apiUrl}/${id}`);
  }

  update(id: number, category: Category): Observable<Category> {
    return this.http.put<Category>(`${this.apiUrl}/${id}`, category);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  incrementJobsCount(id: number): Observable<Category> {
    return this.http.patch<Category>(`${this.apiUrl}/${id}/increment-jobs-count`, {});
  }
}
