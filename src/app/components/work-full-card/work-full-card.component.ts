import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { AllDataService } from '../../services/all-data.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-work-full-card',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatIconModule],
  templateUrl: './work-full-card.component.html',
  styleUrl: './work-full-card.component.scss',
})
export class WorkFullCardComponent {
  job: any;

  constructor(
    public dialogRef: MatDialogRef<WorkFullCardComponent>,
    private allData: AllDataService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.job = data;
  }

  getLogoUrl(logoPath: string): string {
    return `${environment.apiUrl}/logos/${logoPath}`;
  }

  formatDescription(description: string): string {
    const colonIndex = description.indexOf(':');
    if (colonIndex !== -1) {
      const title = description.substring(0, colonIndex);
      const content = description.substring(colonIndex + 1);
      return `<strong>${title}:</strong>${content}`;
    }
    return description;
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
