import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { ProjectService } from '../../services/project.service';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';


Swiper.use([Navigation, Pagination]);
@Component({
  selector: 'app-project-carousel',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './project-carousel.component.html',
  styleUrl: './project-carousel.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProjectCarouselComponent implements OnInit {
  projects: any[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(
      (data) => {
        this.projects = data;
      },
      (error) => {
        console.error('Error fetching projects:', error);
      }
    );
  }

  ngAfterViewInit(): void {
    this.initializeSwiper();
  }

  getImageUrl(imagePath: string): string {
    return this.projectService.getImageUrl(imagePath);
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
