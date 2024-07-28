import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { PageLayoutComponent } from '../../layouts/page-layout/page-layout.component';
import { WorkMiniCardComponent } from '../../components/work-mini-card/work-mini-card.component';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule, PageLayoutComponent, WorkMiniCardComponent],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss',
})
export class WorkExperienceComponent {
  works = [
    { title: 'Scrum Master & Frontend Developer', date: 'Sept 2022 - Sept 2024', logo: "/assets/images/buhler.png" },
    { title: 'Teacher Assistant', date: 'March 2015 - June 2022', logo: "/assets/images/unr.png" },
    { title: 'Scrum Master & Frontend Developer', date: 'Sept 2022 - Sept 2024', logo: "/assets/images/hid-global.svg" },
    { title: 'Teacher Assistant', date: 'March 2015 - June 2022', logo: "/assets/images/conicet.png" },
    { title: 'Scrum Master & Frontend Developer', date: 'Sept 2022 - Sept 2024', logo: "/assets/images/utn.png" },
    { title: 'Teacher Assistant', date: 'March 2015 - June 2022', logo: "/assets/images/commerzbank.png" }
  ];
}
