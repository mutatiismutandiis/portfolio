import {
  AfterViewInit,
  Component,
  OnInit,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import { PageLayoutComponent } from '../../layouts/page-layout/page-layout.component';
import { CardComponent } from '../../components/project-card/card.component';
import { AllDataService } from '../../services/all-data.service';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

Swiper.use([Navigation, Pagination]);

@Component({
  selector: 'app-portfolio',
  standalone: true,
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  imports: [CommonModule, PageLayoutComponent, CardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  projects: any[] = [];

  constructor(private allData: AllDataService) {}

  ngOnInit(): void {
    this.allData.getAllData()
      .pipe(
        tap((data) => {
          if (data?.projects) {
            this.projects = data.projects.map((project: any) => ({
              ...project
            }));
          }
        })
      )
      .subscribe({
        error: (error) => {
          console.error('Error fetching projects from AllDataService:', error);
        }
      });
  }

  ngAfterViewInit(): void {
    this.initializeSwiper();
  }

  getImageUrl(imagePath: string): string {
    // TO DO: Review routes after BE deploy
    return `${environment.apiUrl}/images/${imagePath}`;
  }

  initializeSwiper(): void {
    new Swiper('.mySwiper', {
      loop: this.projects.length > 1, // Enable loop only if there are more than 1 project
      navigation: true,
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
}
