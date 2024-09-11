import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { PageLayoutComponent } from '../../layouts/page-layout/page-layout.component';
import { StudiesService } from '../../services/studies.service';
import { StudyDetailComponent } from '../../components/study-detail/study-detail.component';

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

  constructor(private studiesService: StudiesService) {}

  ngOnInit(): void {
    this.studiesService
      .getStudies()
      .pipe(
        tap((data) => {
          this.studies = data;
        })
      )
      .subscribe({
        error: (error) => console.error('Error fetching studies:', error),
      });
  }
}
