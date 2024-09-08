import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() name: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
  @Input() repoLink: string = '';
  @Input() deployLink: string = '';
}
