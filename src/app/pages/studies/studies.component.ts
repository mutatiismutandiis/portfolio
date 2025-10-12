import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { PageLayoutComponent } from '../../layouts/page-layout/page-layout.component';
import { StudyDetailComponent } from '../../components/study-detail/study-detail.component';
import { AllDataService } from '../../services/all-data.service';

@Component({
  selector: 'app-studies',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    PageLayoutComponent,
    StudyDetailComponent,
  ],
  templateUrl: './studies.component.html',
  styleUrl: './studies.component.scss',
})
export class StudiesComponent implements OnInit {
  studies: any[] = [];

  constructor(private allData: AllDataService) { }

  ngOnInit(): void {
    this.allData.getAllData()
      .pipe(
        tap((data) => {
          if (data?.studies) {
            this.studies = data.studies.map((study: any) => ({
              ...study
            }));
          }
        })
      )
      .subscribe({
        error: (error) => console.error('Error fetching studies from AllDataService:', error),
      });
  }
}
