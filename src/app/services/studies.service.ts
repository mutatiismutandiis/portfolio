import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudiesService {

  private apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  getStudies(): Observable<any[]> {
    console.log(`${this.apiUrl}/api/studies`);
    return this.httpClient.get<any[]>(`${this.apiUrl}/api/studies`);
  }
}

