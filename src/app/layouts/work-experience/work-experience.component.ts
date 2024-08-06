import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { PageLayoutComponent } from '../../layouts/page-layout/page-layout.component';
import { WorkMiniCardComponent } from '../../components/work-mini-card/work-mini-card.component';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule, PageLayoutComponent, WorkMiniCardComponent],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss',
})
export class WorkExperienceComponent {

  jobs: any[] = [];

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.jobService.getJobs().subscribe(
      (data) => {
        this.jobs = data.map(job =>{
          return {
            ...job,
            date: this.formatDate(job.startDate, job.endDate),
            logo: this.getLogoUrl(job.companyLogo)
          };
        });
      },
      (error) => {
        console.error('Error fetching jobs:', error);
      }
    );
  }

  formatDate(startDate: string, endDate: string): string {
    if (endDate === "") {
      return `Since ${startDate}`;
    } else {
      return `${startDate} - ${endDate}`;
    }
  }

  getLogoUrl(logoPath: string): string {
    return this.jobService.getLogoUrl(logoPath);
  }
}

