import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  getProjects(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}/api/projects`);
  }

  getImageUrl(imagePath: string): string {
    return `${this.apiUrl}${imagePath}`;
  }
}
