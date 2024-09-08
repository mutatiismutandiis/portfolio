import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-work-mini-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-mini-card.component.html',
  styleUrl: './work-mini-card.component.scss',
})
export class WorkMiniCardComponent {
  @Input() id!: number;
  @Input() title: string = '';
  @Input() date: string = '';
  @Input() logo: string = '';
  @Input() companyLink: string = '';
  @Output() moreInfo = new EventEmitter<number>();

  onMoreInfo(): void {
    this.moreInfo.emit(this.id);
  }
}
