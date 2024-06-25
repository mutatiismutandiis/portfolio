import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-layout',
  standalone: true,
  imports: [],
  templateUrl: './page-layout.component.html',
  styleUrl: './page-layout.component.scss'
})
export class PageLayoutComponent {
  constructor(private router: Router) {}

  navigateToMain() {
    this.router.navigate(['/']);
  }
}
