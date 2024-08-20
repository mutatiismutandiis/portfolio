import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { tap } from 'rxjs/operators';

import { PageLayoutComponent } from '../../layouts/page-layout/page-layout.component';
import { WorkMiniCardComponent } from '../../components/work-mini-card/work-mini-card.component';
import { WorkFullCardComponent } from '../../components/work-full-card/work-full-card.component';
import { JobService } from '../../services/job.service';

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

  constructor(private jobService: JobService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.jobService
      .getJobs()
      .pipe(
        tap((data) => {
          this.jobs = data.map((job) => ({
            ...job,
            date: this.formatDate(job.startDate, job.endDate),
            logo: this.getLogoUrl(job.companyLogo),
            companyLink: job.companyLink
          }));
        })
      )
      .subscribe({
        error: (error) => console.error('Error fetching jobs:', error),
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
    return this.jobService.getLogoUrl(logoPath);
  }

  openFullCard(id: number): void {
    this.jobService
      .getJobById(id)
      .pipe(
        tap((job) => {
          this.dialog.open(WorkFullCardComponent, {
            data: job,
            width: '80%'
          });
        })
      )
      .subscribe({
        error: (error) => console.error('Error fetching job details:', error),
      });
  }
}
