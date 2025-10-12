import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { tap } from 'rxjs/operators';

import { PageLayoutComponent } from '../../layouts/page-layout/page-layout.component';
import { WorkMiniCardComponent } from '../../components/work-mini-card/work-mini-card.component';
import { WorkFullCardComponent } from '../../components/work-full-card/work-full-card.component';
import { AllDataService } from '../../services/all-data.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [
    CommonModule,
    PageLayoutComponent,
    WorkMiniCardComponent,
    MatDialogModule,
  ],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss',
})
export class WorkExperienceComponent {
  jobs: any[] = [];

  constructor(private allData: AllDataService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.allData.getAllData()
      .pipe(
        tap((data) => {
          if (data?.jobs) {
            this.jobs = data.jobs.map((job: any) => ({
              ...job,
              date: this.formatDate(job.startDate, job.endDate),
              logo: this.getLogoUrl(job.companyLogo),
              companyLink: job.companyLink,
            }));
          }
        })
      )
      .subscribe({
        error: (error) => console.error('Error fetching jobs from AllDataService:', error),
      });
  }

  formatDate(startDate: string, endDate: string): string {
    if (endDate === '') {
      return `Since ${startDate}`;
    } else {
      return `${startDate} - ${endDate}`;
    }
  }

  getLogoUrl(logoPath: string): string {
    return `${environment.apiUrl}/logos/${logoPath}`;
  }

  openFullCard(id: number): void {
   const selectedJob = this.jobs.find((j) => j.id === id);
    if (selectedJob) {
      this.dialog.open(WorkFullCardComponent, {
        data: selectedJob,
        width: '80%',
      });
    } 
  }
}
