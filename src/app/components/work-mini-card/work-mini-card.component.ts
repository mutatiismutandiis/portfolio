import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-work-mini-card',
  standalone: true,
  imports: [],
  templateUrl: './work-mini-card.component.html',
  styleUrl: './work-mini-card.component.scss'
})
export class WorkMiniCardComponent {
  @Input() title: string = '';
  @Input() date: string = '';
  @Input() logo: string = '';
}
