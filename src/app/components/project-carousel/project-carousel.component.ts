import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { ProjectService } from '../../services/project.service';

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

  getImageUrl(imagePath: string): string {
    return this.projectService.getImageUrl(imagePath);
  }
}
