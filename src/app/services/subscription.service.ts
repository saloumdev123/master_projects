import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { MiniSubscriber } from '../interfaces/MiniSubscriber';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  private apiUrl = 'http://localhost:8080/api/subscriptions';

  private http = inject(HttpClient);
  constructor() {}

  simpleSubscribe(data: MiniSubscriber) {
  return this.http.post(`${this.apiUrl}/simple-subscription`, data);
}


}
