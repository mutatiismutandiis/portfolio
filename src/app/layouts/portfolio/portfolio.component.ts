import { Component } from '@angular/core';
import { PageLayoutComponent } from '../page-layout/page-layout.component';
import { ProjectCarouselComponent } from '../../components/project-carousel/project-carousel.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  imports: [PageLayoutComponent, ProjectCarouselComponent],
})
export class PortfolioComponent {}
