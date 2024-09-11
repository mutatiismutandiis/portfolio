import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private apiService: ApiService) {}

  getProjects(): Observable<any[]> {
    return this.apiService.getData('projects');
  }

  getImageUrl(imagePath: string): string {
    return this.apiService.getImageUrl(imagePath);
  }
}
