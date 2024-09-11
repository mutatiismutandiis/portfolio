import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, timer } from 'rxjs';
import { catchError, concatMap, delayWhen, timeout } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = environment.apiUrl;
  private maxRetryTime = 60000;
  private retryDelay = 5000;

  constructor(
    private httpClient: HttpClient,
    private loadingService: LoadingService
  ) {}

  // GET Data from projects, jobs and studies
  getData(endpoint: string): Observable<any[]> {
    this.loadingService.showSpinner();
    return this.httpClient.get<any[]>(`${this.apiUrl}/api/${endpoint}`).pipe(
      timeout(this.maxRetryTime),
      delayWhen(() => timer(this.retryDelay)),
      catchError(this.handleError),
      concatMap((data) =>
        this.httpClient.get<any[]>(`${this.apiUrl}/api/${endpoint}`)
      ),
      catchError(this.handleError),
      delayWhen(() => {
        this.loadingService.hideSpinner();
        return timer(0);
      })
    );
  }

  // Error Handler
  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('Error fetching data:', error);
    this.loadingService.hideSpinner();
    return throwError(
      () =>
        new Error(
          'Unable to fetch data from the backend. Please try again later.'
        )
    );
  }

  // GET Images
  getImageUrl(imagePath: string): string {
    return `${this.apiUrl}${imagePath}`;
  }
}
