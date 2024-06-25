import { Component } from '@angular/core';
import { PageLayoutComponent } from '../page-layout/page-layout.component';

@Component({
    selector: 'app-portfolio',
    standalone: true,
    templateUrl: './portfolio.component.html',
    styleUrl: './portfolio.component.scss',
    imports: [PageLayoutComponent]
})
export class PortfolioComponent {

}
