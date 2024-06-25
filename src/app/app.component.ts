import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { StudiesComponent } from './components/studies/studies.component';

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
