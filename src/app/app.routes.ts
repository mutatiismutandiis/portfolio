import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { WorkExperienceComponent } from './pages/work-experience/work-experience.component';
import { StudiesComponent } from './pages/studies/studies.component';

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'work-experience', component: WorkExperienceComponent },
  { path: 'studies', component: StudiesComponent },
  { path: '**', redirectTo: '' }, // Default
];
