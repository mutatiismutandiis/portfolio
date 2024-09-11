import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root',
})
export class JobService {
  constructor(private apiService: ApiService) {}

  getJobs(): Observable<any[]> {
    return this.apiService.getData('jobs');
  }

  getJobById(id: number): Observable<any> {
    return this.apiService.getData(`jobs/${id}`);
  }

  getLogoUrl(logoPath: string): string {
    return this.apiService.getImageUrl(logoPath);
  }
}
