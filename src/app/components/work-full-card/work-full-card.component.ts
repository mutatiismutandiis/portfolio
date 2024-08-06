import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-work-full-card',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatIconModule],
  templateUrl: './work-full-card.component.html',
  styleUrl: './work-full-card.component.scss'
})

export class WorkFullCardComponent {
  job: any;

  constructor(
    public dialogRef: MatDialogRef<WorkFullCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.job = data;
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
