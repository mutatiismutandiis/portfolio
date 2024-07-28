import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkFullCardComponent } from './work-full-card.component';

describe('WorkFullCardComponent', () => {
  let component: WorkFullCardComponent;
  let fixture: ComponentFixture<WorkFullCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkFullCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkFullCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
