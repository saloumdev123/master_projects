import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscriber } from '../interfaces/subscriber';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  private apiUrl = 'http://localhost:8080/api/subscriptions';

  private http = inject(HttpClient);
  constructor() {}

   createSubscription(subscriber: Subscriber): Observable<Subscriber> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Subscriber>(this.apiUrl, subscriber, { headers });
  }
}
