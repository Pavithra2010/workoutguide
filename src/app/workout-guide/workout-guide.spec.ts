import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutGuide } from './workout-guide';

describe('WorkoutGuide', () => {
  let component: WorkoutGuide;
  let fixture: ComponentFixture<WorkoutGuide>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkoutGuide]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutGuide);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
