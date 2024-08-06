import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  getJobs(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}/api/jobs`);
  }

  getJobById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/api/jobs/${id}`);
  }

  getLogoUrl(logoPath: string): string {
    return `${this.apiUrl}${logoPath}`;
  }
}
