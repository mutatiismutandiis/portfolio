import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-study-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './study-detail.component.html',
  styleUrl: './study-detail.component.scss',
})
export class StudyDetailComponent implements OnInit {
  @Input() category: string = '';
  @Input() item: any;

  isHigherEducation = false;
  isITCourse = false;
  isCertification = false;

  startDate: string | undefined;
  endDate: string | undefined;
  date: string | undefined;

  location: string | undefined;
  description: string | undefined;

  details: any[] | undefined;
  skills: string[] | undefined;

  certificate: string | undefined;

  badgeText: string | undefined;
  badgeIcon: string | undefined;

  ngOnInit(): void {
    this.checkCategory();
    this.extractFields();
  }

  private checkCategory(): void {
    switch (this.category) {
      case 'Higher Education':
        this.isHigherEducation = true;
        break;
      case 'IT Courses':
        this.isITCourse = true;
        break;
      case 'Certifications':
        this.isCertification = true;
        break;
      default:
        console.warn('Unknown category', this.category);
    }
  }

  private extractFields(): void {
    this.startDate = this.item.startDate;
    this.endDate = this.item.endDate;
    this.date = this.item.date;
    this.location = this.item.location;
    this.description = this.item.description;
    this.certificate = this.item.certificate;

    // Adjustments according to category
    this.details = this.isHigherEducation ? this.item.details : undefined;
    this.skills =
      this.isITCourse || this.isCertification ? this.item.skills : undefined;
  }

  // Function to handle date display logic
  displayDate(): string {
    if (this.isHigherEducation || this.isITCourse) {
      if (this.startDate && this.endDate) {
        return `${this.startDate} - ${this.endDate}`;
      } else if (this.startDate) {
        return `${this.startDate} - Present`;
      } else {
        return '';
      }
    } else if (this.isCertification) {
      if (this.date) {
        return `Obtained ${this.date}.`;
      } else {
        return '';
      }
    } else {
      return '';
    }
  }

  //Functions to handle the badges
  getBadgeText(): string {
    if (this.item.incomplete) {
      return this.item.incompleteReason;
    } else if (this.certificate) {
      return 'View certificate';
    } else {
      return '';
    }
  }

  getBadgeIcon(): string | undefined {
    if (this.item.incomplete) {
      return 'info';
    } else if (this.certificate) {
      return 'attach_file';
    } else {
      return undefined;
    }
  }
}
