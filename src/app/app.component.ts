import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainPageComponent } from './layouts/main-page/main-page.component';
import { PortfolioComponent } from './layouts/portfolio/portfolio.component';
import { WorkExperienceComponent } from './layouts/work-experience/work-experience.component';
import { StudiesComponent } from './layouts/studies/studies.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio';

  components = {
    'main-page': MainPageComponent,
    portfolio: PortfolioComponent,
    'work-experience': WorkExperienceComponent,
    studies: StudiesComponent,
  };

  getComponent(
    componentName: keyof typeof AppComponent.prototype.components
  ): any {
    return this.components[componentName];
  }
}
