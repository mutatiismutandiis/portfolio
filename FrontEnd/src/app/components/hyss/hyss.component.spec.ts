import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HyssComponent } from './hyss.component';

describe('HyssComponent', () => {
  let component: HyssComponent;
  let fixture: ComponentFixture<HyssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HyssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HyssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
