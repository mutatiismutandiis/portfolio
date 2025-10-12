import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, of, retry, timeout } from 'rxjs';

import { environment } from '../../environments/environment';
import { LoadingService } from './loading.service';

interface AllData {
    projects: any[];
    jobs: any[];
    studies: any[];
}

@Injectable({
    providedIn: 'root',
})
export class AllDataService {
    private apiUrl = environment.apiUrl;
    private dataSubject = new BehaviorSubject<AllData | null>(null);
    public data$ = this.dataSubject.asObservable();

    constructor(private http: HttpClient, private loadingService: LoadingService) {
        this.fetchAllData();
    }

    private fetchAllData(): void {
        this.loadingService.showSpinner();
        this.http.get<AllData>(`${this.apiUrl}/api/all`).pipe(
            timeout(30000), // 30 seconds timeout
            retry(2),       // Retry up to 2 times on error
            catchError((err) => {
                console.error('Error fetching all data:', err);
                this.dataSubject.next(null);
                this.loadingService.hideSpinner();
                return of(null);
            })
        ).subscribe((data) => {
            this.dataSubject.next(data);
            this.loadingService.hideSpinner();
        });
    }

    getAllData(): Observable<AllData | null> {
        return this.data$;
    }

    get currentData(): AllData | null {
        return this.dataSubject.value;
    }
}
