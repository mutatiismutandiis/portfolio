import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkMiniCardComponent } from './work-mini-card.component';

describe('WorkMiniCardComponent', () => {
  let component: WorkMiniCardComponent;
  let fixture: ComponentFixture<WorkMiniCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkMiniCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkMiniCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
