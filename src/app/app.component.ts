import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { WorkExperienceComponent } from './pages/work-experience/work-experience.component';
import { StudiesComponent } from './pages/studies/studies.component';
import { AllDataService } from './services/all-data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  components = {
    'main-page': MainPageComponent,
    portfolio: PortfolioComponent,
    'work-experience': WorkExperienceComponent,
    studies: StudiesComponent,
  };

  constructor(private allDataService: AllDataService) {}

  ngOnInit(): void {
    // Call backend when loading page
    this.allDataService.getAllData().subscribe({
      next: (data) => console.log('✅ Loaded data from /api/all:', data),
      error: (err) => console.error('❌ Error loading /api/all', err),
    });
  }

  getComponent(
    componentName: keyof typeof AppComponent.prototype.components
  ): any {
    return this.components[componentName];
  }
}
