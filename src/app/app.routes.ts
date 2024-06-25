import { Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { StudiesComponent } from './components/studies/studies.component';

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'work-experience', component: WorkExperienceComponent },
  { path: 'studies', component: StudiesComponent },
  { path: '**', redirectTo: ''} // Default
];
