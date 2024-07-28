import { Routes } from '@angular/router';
import { MainPageComponent } from './layouts/main-page/main-page.component';
import { PortfolioComponent } from './layouts/portfolio/portfolio.component';
import { WorkExperienceComponent } from './layouts/work-experience/work-experience.component';
import { StudiesComponent } from './layouts/studies/studies.component';

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'work-experience', component: WorkExperienceComponent },
  { path: 'studies', component: StudiesComponent },
  { path: '**', redirectTo: '' }, // Default
];
