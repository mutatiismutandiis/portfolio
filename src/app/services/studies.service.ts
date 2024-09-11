import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class StudiesService {
  constructor(private apiService: ApiService) {}

  getStudies(): Observable<any[]> {
    return this.apiService.getData('studies');
  }
}
